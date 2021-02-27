import { useState } from "react";
import { Card, Text, Row } from "@geist-ui/react";
import { ArrowUpRightIcon } from "@primer/octicons-react";
import Logo from "./Logo";

// TODO(@johnletey): Add icon animation on hover.
const Block = (props: { name: string; description: string; link: string }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      style={{ borderRadius: 0, cursor: "pointer" }}
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
        {hovered ? <ArrowUpRightIcon size={36} /> : <Logo name={props.name} />}
      </Row>
    </Card>
  );
};

export default Block;
