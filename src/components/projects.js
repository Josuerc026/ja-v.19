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
 width: 100%;
 min-height: 400px;
 position: relative;
 margin: 30px 0;
 
  .content {
   border: 1px solid gray;
   background: #212121;
   color: #fff;
   padding: 30px;
   transition: 0.25s all;
   
   h4{
    a{
     color: #fff;
    }
   }
   
   @media (min-width: 768px){
    position: absolute;
    z-index: 999;
    width: 60%;
    bottom: 0;
   }
  }
  &:nth-child(odd){
    .content{
     right: 0;
    }
    .bg-image{
     margin-right: auto;
     }  
  }
  &:nth-child(even){
   .content{
    left: 0;
   }
   .bg-image{
    margin-left: auto;
   }  
  }
  .content ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0;
  }
  .content ul li{
   width: 33.33%;
   font-weight: bold;
   font-size: 1rem;
   
   @media (min-width: 768px){
    width: 25%;
   }
  }
  .bg-image{
   height: 150px;
   position: relative;
   background: url(${props => ( props.bgImage ? props.bgImage.childImageSharp.fluid.src : '' )}) no-repeat center center / cover;
   &:before{
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(255,2,108,0.75);
    
   }
   @media (min-width: 768px){
     width: 75%;
     height: 350px;
   }
    
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
          <ProjectItem bgImage={item.image}>
           <div className={"bg-image"}>
           </div>
           <div className={"content"}>
             <h4><a href={item.url} target="_blank">{item.name}</a></h4>
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