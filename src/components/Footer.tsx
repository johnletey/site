import { useState } from "react";
import { Spacer, Row, Link } from "@geist-ui/react";
import { Twitter, GitHub, AtSign } from "react-feather";

const Footer = () => {
  const [hovered, setHovered] = useState("");

  return (
    <>
      <Spacer y={2.5} />
      <Row align="middle" justify="space-between">
        <Row align="middle" justify="center" style={{ color: "#333" }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ marginRight: "5px" }}
          >
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M15 9.354a4 4 0 100 5.292"></path>
          </svg>{" "}
          1984
        </Row>
        <Row justify="center">
          <Link
            target="_blank"
            href="https://twitter.com/johnletey"
            style={{ marginRight: "10px" }}
            onMouseEnter={() => setHovered("twitter")}
            onMouseLeave={() => setHovered("")}
          >
            <Twitter
              size={20}
              color={hovered === "twitter" ? "#a76c6e" : "#333"}
            />
          </Link>{" "}
          <Link
            target="_blank"
            href="https://github.com/johnletey"
            style={{ marginRight: "10px" }}
            onMouseEnter={() => setHovered("github")}
            onMouseLeave={() => setHovered("")}
          >
            <GitHub
              size={20}
              color={hovered === "github" ? "#a76c6e" : "#333"}
            />
          </Link>{" "}
          <Link
            target="_blank"
            href="mailto:john@verto.exchange"
            onMouseEnter={() => setHovered("mail")}
            onMouseLeave={() => setHovered("")}
          >
            <AtSign size={20} color={hovered === "mail" ? "#a76c6e" : "#333"} />
          </Link>
        </Row>
      </Row>
    </>
  );
};

export default Footer;
