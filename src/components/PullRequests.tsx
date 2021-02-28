import { GitPullRequestIcon } from "@primer/octicons-react";
import moment from "moment";
import { useEffect, useState } from "react";
import query from "../queries/prs";
import Block from "./Block";

interface PullRequest {
  title: string;
  repo: string;
  number: string;
  status: "open" | "draft" | "closed" | "merged";
  color: string;
  startDate: string;
  endDate: string | undefined;
}

const PullRequests = () => {
  const [data, setData] = useState<PullRequest[]>([]);

  useEffect(() => {
    (async () => {
      const raw = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${"798864c6b330a9bb41f4c374fba833089edf3268"}`,
        },
        body: JSON.stringify({ query }),
      });
      const res = (await raw.json()).data.user.pullRequests.edges;

      const data: PullRequest[] = [];
      for (const { node } of res) {
        const status = node.merged
          ? "merged"
          : node.closed
          ? "closed"
          : node.isDraft
          ? "draft"
          : "open";

        let color = "";
        if (status === "merged") {
          color = "#b075cd";
        }
        if (status === "closed") {
          color = "#ff375d";
        }
        if (status === "draft") {
          color = "#8f9ba8";
        }
        if (status === "open") {
          color = "#00d46e";
        }

        const endDate =
          status === "merged"
            ? node.mergedAt
            : status === "closed"
            ? node.closedAt
            : undefined;

        data.push({
          title: node.title,
          repo: node.repository.nameWithOwner,
          number: node.number,
          status,
          color,
          startDate: node.publishedAt,
          endDate,
        });
      }

      setData(
        data.sort(
          (a, b) => moment(b.startDate).unix() - moment(a.startDate).unix()
        )
      );
    })();
  }, []);

  return (
    <>
      {data.map((pr) => (
        <Block
          name={pr.title}
          description={`${pr.repo}#${pr.number} • ${moment(pr.startDate).format(
            "MMM DD, YYYY"
          )}`}
          icon={
            <span style={{ color: pr.color }}>
              <GitPullRequestIcon size={30} />
            </span>
          }
          link={`https://github.com/${pr.repo}/pull/${pr.number}`}
          key={`${pr.repo}#${pr.number}`}
          isLast={data.indexOf(pr) === data.length - 1}
        />
      ))}
    </>
  );
};

export default PullRequests;
