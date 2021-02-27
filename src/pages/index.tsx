import { Page } from "@geist-ui/react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <Page>
      <Hero title="John Letey" />
      <Projects />
    </Page>
  );
};

export default Home;
