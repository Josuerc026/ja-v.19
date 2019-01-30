import React from "react";
import Layout from "../components/layout";
import Header from "../components/header";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Jobs from "../components/jobs";
import About from "../components/about";
import Footer from "../components/footer";
import { graphql } from "gatsby";

export default ({data, children}) => (
  <Layout children={children}>
   <Header />
   <div className={"container"}>
    <Hero data={data.hero.edges}/>
    <About data={data.about.edges}/>
    <Jobs data={data.jobs.edges}/>
    <Projects data={data.projects.edges}/>
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
  projects: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/projects/" } }, sort: { fields: [frontmatter___name], order: ASC }) {
    edges {
      node {
        frontmatter {
          name
        	url
          description
          tech
          image {
            childImageSharp {
                fluid(maxWidth: 600) {
                  src
                }
            }
          }
        }
      } 
    }
  }
  jobs: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/jobs/" } }, sort: { fields: [frontmatter___start], order: DESC }) {
    edges {
      node {
        frontmatter {
          name
          start
          end
        	title
          duties
        }
      }
    }
  }
  about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
    edges {
      node {
        frontmatter {
          languages
          frameworks
          tools
        }
        html
      }
    }
  }
}
`