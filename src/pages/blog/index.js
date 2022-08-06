import React from "react";
import { graphql, Link } from "gatsby";
import Header from "../layout/header";
import { MDXRenderer } from "gatsby-plugin-mdx";
const Blog = ({ data }) => {
  return (
    <>
      <Header />
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <Link to={`/blog/${node.slug}`}>{node.frontmatter.title}</Link>
          <p>Posted: {node.frontmatter.date}</p>
          <MDXRenderer>{node.body}</MDXRenderer>
        </article>
      ))}
    </>
  );
};
export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          date
          title
        }
        id
        slug
        body
      }
    }
  }
`;
export default Blog;
