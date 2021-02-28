import { Page } from "@geist-ui/react";
import Hero from "../components/Hero";
import PullRequests from "../components/PullRequests";
import Footer from "../components/Footer";

const Activity = (props: { token: string }) => {
  return (
    <Page>
      <Hero title="Latest Activity" />
      <PullRequests token={props.token} />
      <Footer />
    </Page>
  );
};

export async function getStaticProps() {
  return { props: { token: process.env.TOKEN } };
}

export default Activity;
