import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
const SinglePost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />

      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </>
  );
};
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
export default SinglePost;
