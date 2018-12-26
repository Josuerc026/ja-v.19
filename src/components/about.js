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
 padding: 15px 30px 15px 0;
 @media (min-width: 768px){
  width: 60%;
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
  width: 40%;
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
`;

class About extends Component{
 componentDidMount(){
  ScrollReveal().reveal('.about-container', {
   delay: 300
  })
 }
 render(){
  return(
   <AboutContainer className={"block about-container"}>
    <Title>
     A bit about me.
    </Title>
    <IntroContainer>
     <p>I began my web development career in the mid 2010s and have fallen in 💓 with flexibility and robustness of the platform. Since then, I've worked with a wide variety of organizations ranging from non-profits to government agencies.</p>
     <p>I create intuitive and inclusive web experiences by focusing on accessibility ♿ and meeting the latest WCAG 2.0 standards.</p>
     <p>If i'm not on the computer, you can usually find me playing video games and/or playing around with Sir Charles, my cat 🐈.</p>
    </IntroContainer>
    <SkillsContainer>
     <code>Skills: </code>
     <ul>
      <li>
       <code>Languages: </code>
       <ul>
        <li><code>> JavaScript (ES6)</code></li>
        <li><code>> PHP</code></li>
        <li><code>> CSS / SCSS</code></li>
        <li><code>> HTML5 </code></li>
       </ul>
       <code>Frameworks: </code>
       <ul>
        <li><code>> Vue</code></li>
        <li><code>> Node.js </code></li>
        <li><code>> React</code></li>
        <li><code>> Gatsby</code></li>
        <li><code>> WordPress</code></li>
       </ul>
      </li>
     </ul>
    </SkillsContainer>
   </AboutContainer>
  )
 }
}

export default About;