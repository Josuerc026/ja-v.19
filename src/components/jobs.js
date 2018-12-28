import React, { Component } from "react";
import ScrollReveal from "scrollreveal";
import styled from "styled-components";

const JobsContainer = styled.div`
 position: relative;
`;

const Title = styled.h2`
 position: relative;
 margin-bottom: 30px;
`;

const JobsInner = styled.div`
 position: relative;
 padding-left: 115px;
 &:before{
  content: '';
  width: 1.5px;
  min-height: 100%;
  display: block;
  background: #ff006a;
  position: absolute;
  top: 5px;
 }
 @media (min-width: 768px){
  padding-left: 150px;
 }
`;

const JobItem = styled.div`
 position: relative;
 padding-left: 15px;
 margin: 30px 0;
 
 &:before{
  content: '';
  display: block;
  width: 30px;
  height: 2px;
  position: absolute;
  top: 5px;
  right: 100%;
  background: #ff006a;
 }
 
 small{
  display: block;
  position: absolute;
  right: calc(100% + 30px);
  width: 100px;
  padding-right: 10px;
  text-align: right;
 }
`;

class Jobs extends Component{
 componentDidMount(){
  ScrollReveal().reveal('.jobs-container', {
   delay: 300
  });
 }
 render(){
  const jobs = this.props.data.map(item => item.node.frontmatter);
  return (
    <JobsContainer className={"block jobs-container"}>
     <Title>Where I've worked.</Title>
     <JobsInner>
      {
       jobs.map(job => {
        return (
          <JobItem>
           <small>{new Date(job.start).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short'})} - <br/> {job.end !== "Current" ? new Date(job.end).toLocaleDateString('en-US', {
            year: 'numeric', month: 'short'}) : job.end }</small>
           <h4>{job.name}</h4>
           <ul>
            {
             job.duties.map(duty => <li className={"jobs-container"}><span>{duty}</span></li>)
            }
           </ul>
          </JobItem>
        )
       })
      }
     </JobsInner>
    </JobsContainer>
  )
 }
}

export default Jobs;