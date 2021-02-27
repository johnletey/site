import { Page } from "@geist-ui/react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <Page>
      <Hero title="John Letey" />
      <Projects />
      <Footer />
    </Page>
  );
};

export default Home;
