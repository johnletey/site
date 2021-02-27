import { projects as data } from "../data";
import Block from "./Block";

const Projects = () => {
  return (
    <>
      {data.map((project) => (
        <Block
          name={project.name}
          description={project.description}
          link={project.link}
          key={project.link}
          isLast={data.indexOf(project) === data.length - 1}
        />
      ))}
    </>
  );
};

export default Projects;
