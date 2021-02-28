import { useState } from "react";
import { Card, Text, Row } from "@geist-ui/react";
import { ArrowUpRightIcon } from "@primer/octicons-react";
import Logo from "./Logo";

// TODO(@johnletey): Add icon animation on hover.
const Block = (props: {
  name: string;
  description: string;
  icon?: any;
  link: string;
  isLast: boolean;
}) => {
  const [hovered, setHovered] = useState(false);
  const border = `1px solid ${hovered ? "#a76c6e" : "#333"}`;

  return (
    <Card
      style={{
        borderTop: border,
        borderBottom: props.isLast || hovered ? border : "1px solid #000",
        borderLeft: border,
        borderRight: border,
        borderRadius: 0,
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => window.open(props.link, "_blank")}
    >
      <Row align="middle" justify="space-between">
        <span>
          <Text h3>{props.name}</Text>
          <Text type="secondary" style={{ margin: 0 }}>
            {props.description}
          </Text>
        </span>
        {hovered ? (
          <span style={{ color: "#8f9ba8" }}>
            <ArrowUpRightIcon size={36} />
          </span>
        ) : (
          <>{props.icon || <Logo name={props.name} />}</>
        )}
      </Row>
    </Card>
  );
};

export default Block;
