import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Hero from "../components/hero";
import { graphql } from "gatsby";

export default ({data}) => (
  <Layout>
    <Header />
    <Hero data={data.hero.edges}/>
  </Layout>
);

export const query = graphql`
 query{
  hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
    edges {
      node {
        frontmatter {
          intro
          name
          contactText
          url
          _PARENT
        }
        html
      }
    }
  }
}
`