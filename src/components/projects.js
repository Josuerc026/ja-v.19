import React, { Component } from "react";
import ScrollReveal from "scrollreveal";
import styled from "styled-components";

const ProjectContainer = styled.section`
 position: relative;
`;

const Title = styled.h2`
 width: 100%;
 margin-bottom: 30px;
`;

const ProjectGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProjectItem = styled.div` 
 padding: 15px;
 @media (min-width: 992px){
  width: 33.33%;
 }
 @media (min-width: 768px){
  width: 50%;
 }
 @media (max-width: 768px){
  width: 100%;
 }

 > div{
  height: 100%;
  border: 1px solid gray;
  background: #212121;
  padding: 15px;
  position: relative;
  box-shadow: 0 5px 8px rgba(0,0,0,0.85);
  transition: 0.25s all;
  }
 > div ul{
   display: flex;
   flex-wrap: wrap;
   list-style-type: none;
   margin: 0;
 }
 > div ul li{
  width: 33.33%;
  font-weight: bold;
  font-size: 1rem;
 }
 > div:before{
   content: '';
   background: #ff006a;
   display: block;
   z-index: -1;
   bottom: -10px;
   right: -5px;
   width: 100%;
   height: 100%;
   position: absolute;
 }
 
 > div:hover{
  box-shadow: 0 5px 8px rgba(0,0,0,0.4);
 }
`;

class Projects extends Component{

 componentDidMount(){
  ScrollReveal().reveal('.project-container',{
   delay: 300
  });
 }

 render() {
  const projects = this.props.data.map( item => item.node.frontmatter );
  return (
    <ProjectContainer id={"projects"} className={"block project-container"}>
     <Title>What i've worked on.</Title>
     <ProjectGrid>
      {
       projects.map(item => {
        return (
          <ProjectItem>
           <div>
             <h4>{item.name}</h4>
             <p>{item.description}</p>
             <ul>
              {item.tech.map(item => <li><span>{item}</span></li>)}
             </ul>
           </div>
        </ProjectItem>)
       })
      }
     </ProjectGrid>
    </ProjectContainer>
  )
 }
}
export default Projects;