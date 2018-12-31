import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';
import Button from './button';

const HeroContainer = styled.section`
 display: flex;
 align-items: center;
 justify-content: left;
 padding: 30px;
 height: 100vh;
`;
const HeroInner = styled.div`
width: 75%;
 
@media (max-width: 768px){
 width: 100%;
}
`;

export default ({ data }) => (
  <HeroContainer id={"hero"}>
   <HeroInner>
    <h1 className={"mt-5"}>{data[0].node.frontmatter.name}</h1>
    <h2 dangerouslySetInnerHTML={{__html:data[0].node.frontmatter.intro}}></h2>
    <p dangerouslySetInnerHTML={{__html:data[0].node.html}}></p>
    <Button url={data[0].node.frontmatter.url} title={data[0].node.frontmatter.contactText} />
   </HeroInner>
  </HeroContainer>
);
