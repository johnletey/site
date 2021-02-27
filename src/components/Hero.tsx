import { Row, Text } from "@geist-ui/react";
import Nav from "./Nav";

const Hero = (props: { title: string }) => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      <Row justify="end">
        <Nav />
      </Row>
      <div
        style={{
          position: "absolute",
          top: "80%",
          transform: "translateY(-80%)",
        }}
      >
        <Text h2>{props.title}</Text>
      </div>
    </div>
  );
};

export default Hero;
