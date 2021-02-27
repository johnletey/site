import { Page } from "@geist-ui/react";
import Block from "../components/Block";

const Projects = [
  {
    name: "KYVE",
    description: "The unified archive for blockchains.",
    link: "https://kyve.network",
  },
  {
    name: "th8ta",
    description: "Building from all angles.",
    link: "https://th8ta.org",
  },
  {
    name: "Verto",
    description: "A decentralised trading protocol on Arweave.",
    link: "https://verto.exchange",
  },
  {
    name: "ArVerify",
    description: "Trusted verification for the Arweave network.",
    link: "https://arverify.org",
  },
];

const Home = () => {
  return (
    <Page>
      {Projects.map((project) => (
        <Block
          name={project.name}
          description={project.description}
          link={project.link}
          key={project.name}
        />
      ))}
    </Page>
  );
};

export default Home;
