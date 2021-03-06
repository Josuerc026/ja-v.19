import React from "react";
import Github from "./icons/github";
import Linkedin from "./icons/linkedin";
import styled from "styled-components";

const Social = styled.div`
 @media (max-width: 768px){
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
 }
 @media (min-width: 768px){
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 30px 30px 0 30px;
  
  &:after{
    content: "";
    margin: 0 auto;
    width: 0.5px;
    display: block;
    height: 85px;
    margin-top: 15px;
    border: 1px solid #989898;
  }
 }
 svg{
  width: 25px;
  height: 25px;
  display: block;
  margin: 15px 10px 0 10px;
  
 }
`;

export default props => (
 <Social>
  <a href={props.gitHub}><Github/></a>
  <a href={props.linkedIn}><Linkedin/></a>
 </Social>
)