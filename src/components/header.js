import React, {Component} from "react";
import styled from 'styled-components';

const HeaderContainer = styled.header`
 position: fixed;
 width: 100%;
 left: 0;
 
`;

const HeaderIcon = styled.div`
 display: inline-block;
 width: 50px;
 height: 50px;
 border: 3px solid #FF026C;
 &:before{
  content: "ja";
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
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
      <HeaderIcon>
      </HeaderIcon>
     </HeaderContainer>
   )
 }
}

export default Header;