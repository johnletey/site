import Block from "./Block";

const Data = [
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

const Projects = () => {
  return (
    <>
      {Data.map((project) => {
        const index = Data.indexOf(project);

        return (
          <Block
            name={project.name}
            description={project.description}
            link={project.link}
            key={project.link}
            isLast={index === Data.length - 1}
          />
        );
      })}
    </>
  );
};

export default Projects;
