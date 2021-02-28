export default `
{
  user(login: "johnletey") {
    pullRequests(last: 10) {
      edges {
        node {
          title

          repository {
            nameWithOwner
          }
          number

          isDraft
          closed
          merged
          
          publishedAt
          closedAt
          mergedAt
        }
      }
    }
  }
}
`;
