import React, {Component} from "react";
import styled from "styled-components";

const Logo = styled.div`
 display: inline-block;
 width: 50px;
 height: 50px;
 background: #FF026C;
 &:before{
  content: "ja";
  font-weight: bold;
  font-size: 1rem;
  color: #282828;
  font-family: sans-serif;
  text-align: center;
  display: block;
  padding: 25% 0;
 }
`;

class Icon extends Component{
 render(){ return (<Logo/>) }
}
export default Icon;