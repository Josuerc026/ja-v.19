import React from "react";
import styled from "styled-components";

const Button = styled.a`
 color: #fff;
 padding: 10px;
 display: inline-block;
 margin: 5px 0;
 text-decoration: none;
 border: 3px solid #FF026C;
 transition: 0.25s all;
 
 &:hover,
 &:focus{
  background: #FF026C;
 }
`;

export default props => (
  <Button href={props.url} >{props.title}</Button>
)