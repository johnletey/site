import { useState } from "react";
import { Row, Link, Spacer } from "@geist-ui/react";
import { XIcon, ThreeBarsIcon } from "@primer/octicons-react";

const Data = [
  { name: "Thoughts", link: "/thoughts" },
  { name: "@johnletey", link: "https://twitter.com/johnletey" },
];

// TODO(@johnletey): Find better icons.
// TODO(@johnletey): Add icon animation on click.
const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Row align="middle">
      {open && (
        <>
          {Data.map((entry) => (
            <>
              <Link
                target={entry.link.startsWith("/") ? undefined : "_blank"}
                href={entry.link}
                underline
              >
                {entry.name}
              </Link>
              <Spacer x={1} />
            </>
          ))}
        </>
      )}
      {open ? (
        <span onClick={() => setOpen(false)} style={{ cursor: "pointer" }}>
          <XIcon size={24} />
        </span>
      ) : (
        <span onClick={() => setOpen(true)} style={{ cursor: "pointer" }}>
          <ThreeBarsIcon size={20} />
        </span>
      )}
    </Row>
  );
};

export default Nav;
