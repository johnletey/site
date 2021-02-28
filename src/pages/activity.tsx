import { Page } from "@geist-ui/react";
import Hero from "../components/Hero";
import PullRequests from "../components/PullRequests";
import Footer from "../components/Footer";

const Activity = () => {
  return (
    <Page>
      <Hero title="Latest Activity" />
      <PullRequests />
      <Footer />
    </Page>
  );
};

export default Activity;
