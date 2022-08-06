import React from "react";
import { useStaticQuery, graphql } from "gatsby";
const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <title>{data.site.siteMetadata.title}</title>
      <title>{data.site.siteMetadata.title}</title>
      <h2>{data.site.siteMetadata.title}</h2>
    </>
  );
};

export default Header;
