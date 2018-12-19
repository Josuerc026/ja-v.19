import React from "react";
import { graphql } from "gatsby";
import styled from 'styled-components';
import Button from './button';

const HeroContainer = styled.section`
 display: flex;
 align-items: center;
 justify-content: left;
 height: 100vh;
`;
const HeroInner = styled.div`
width: 75%;
@media (max-width: 768px){
 width: 100%;
}
`;

// class Hero extends Component {
//  render(){
//   return(
//     <HeroContainer className={"block"}>
//      <HeroInner>
//       <h1>hello there, <br/>I'm josue.</h1>
//       <h3>I build the web with <span className={"highlight"}>accessibility</span> in mind.</h3>
//       <Button url={"#"} title={"contact me"} />
//      </HeroInner>
//     </HeroContainer>
//   )
//  }
// }

export default ({ data }) => (
  <HeroContainer className={"block"}>
   <HeroInner>
    <h1>{data[0].node.frontmatter.intro}<br/>I'm {data[0].node.frontmatter.name}</h1>
    <h3 dangerouslySetInnerHTML={{__html:data[0].node.html}}></h3>
    <Button url={data[0].node.frontmatter.url} title={data[0].node.frontmatter.contactText} />
   </HeroInner>
  </HeroContainer>
);
