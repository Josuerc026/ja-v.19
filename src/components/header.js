import React, {Component} from "react";
import styled from 'styled-components';
import Icon from "./icon";

const HeaderContainer = styled.header`
 position: fixed;
 width: 100%;
 left: 0;
`;

const HeaderIcon = styled.div`
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

class Header extends Component {
 render(){
   return (
     <HeaderContainer className={"block"}>
      <Icon/>
     </HeaderContainer>
   )
 }
}

export default Header;