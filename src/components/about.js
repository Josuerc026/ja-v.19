import React, { Component } from "react";
import ScrollReveal from "scrollreveal";
import styled from "styled-components";


const AboutContainer = styled.section`
 position: relative;
 display: flex;
 flex-wrap: wrap;
 
`;

const Title = styled.h2`
 position: relative;
 width: 100%;
 margin-bottom: 30px;
`;

const IntroContainer = styled.div`
 position: relative;
 padding: 15px 15px 15px 0;
 @media (min-width: 768px){
  width: 100%;
 }
`;

const SkillsContainer = styled.div`
 position: relative;
 width: 100%;
 height: 100%;
 background: #191919;
 border-radius: 8px 8px 0 0;
 border-left: 1px solid #ff006a;
 border-right: 1px solid #ff006a;
 border-bottom: 1px solid #ff006a;
 padding: 35px 15px 15px 15px;
 
 @media (min-width: 768px){
  width: 75%;
  margin: 0 auto;
 }
 
 &:before{
  content: '';
  display: block;
  border-radius: inherit;
  background: #ff006a;
  position: absolute;
  top: 0;
  left: -2px;
  width: calc(100% + 4px);
  height: 20px;
 }
 
 ul li{
  margin: 0;
  padding: 0;
  list-style-type: none;
 }
 
 .skill-items{
  display: flex;
  flex-wrap: wrap;
 }
`;

const SkillItem = styled.div`
@media (min-width: 768px){
 flex: 1;
}
@media (max-width: 768px){
 width: 100%;
}
`;

class About extends Component{
 componentDidMount(){
  ScrollReveal().reveal('.about-container', {
   delay: 300
  })
 }
 render(){
  const content = this.props.data[0].node.html;
  const skills = this.props.data[0].node.frontmatter;
  return(
   <AboutContainer id={"about"} className={"block about-container"}>
    <Title>
     A bit about me.
    </Title>
    <IntroContainer dangerouslySetInnerHTML={{__html: content}}>
    </IntroContainer>
    <SkillsContainer>
     <code>Skills: </code>
     <ul>
      <li className={"skill-items"}>
       {
        Object.keys(skills).map(key => {
           return (
             <SkillItem>
              <code>{key}:</code>
              <ul>{ skills[key].map(skill => (<li><code> > {skill}</code></li>)) }</ul>
             </SkillItem>
           )
        })
       }
      </li>
     </ul>
    </SkillsContainer>
   </AboutContainer>
  )
 }
}

export default About;