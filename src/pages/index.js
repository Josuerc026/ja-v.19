import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Hero from "../components/hero";
import Footer from "../components/footer";
import { graphql } from "gatsby";

export default ({data, children}) => (
  <Layout children={children}>
   <div className={"container"}>
    <Header />
    <Hero data={data.hero.edges} class={"container"}/>
   </div>
    <Footer />
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