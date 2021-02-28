import { useRouter } from "next/router";
import { Row, Link, Text } from "@geist-ui/react";
import Nav from "./Nav";

// TODO(@johnletey): Align items in navbar. Sticky navbar.
// TODO(@johnletey): Handle full-height better.
const Hero = (props: { title: string }) => {
  const router = useRouter();
  const isHome = router.route === "/";

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
      }}
    >
      <Row align="middle" justify={isHome ? "end" : "space-between"}>
        {!isHome && (
          <Link href="/">
            <Text h3>letey</Text>
          </Link>
        )}
        <Nav />
      </Row>
      <div
        style={{
          position: "absolute",
          top: "80%",
          transform: "translateY(-80%)",
        }}
      >
        <Text
          h2
          style={{ background: "rgba(255, 255, 255, 0.99)", color: "#000" }}
        >
          {props.title}
        </Text>
      </div>
    </div>
  );
};

export default Hero;
