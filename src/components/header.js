import React, {Component} from "react";
import styled from 'styled-components';
import Icon from "./icon";

const HeaderContainer = styled.header`
 position: fixed;
 width: 100%;
 left: 0;
 top: ${props => (props.adjust === 'down' ? '-100%' : '0') };
 background: ${props => (props.adjust === 'up' && props.lastScroll !== 0 ?  'rgba(33, 33, 33,0.85)' : 'none' ) };
 transition: 0.4s all ease-in-out;
 padding: 15px 30px;
 z-index: 999;
`;

class Header extends Component {

 state = {
  lastScroll: 0,
  scrollDirection: 'none'
 }

 componentDidMount(){
   window.addEventListener('scroll', () => {

    if(window.scrollY > this.state.lastScroll){
     this.setState({scrollDirection: 'down'});
     this.setState({
      lastScroll: window.scrollY
     })
    }

    if(window.scrollY < this.state.lastScroll){
     this.setState({scrollDirection: 'up'});
     this.setState({
      lastScroll: window.scrollY
     })

    }

    console.log(this.state.scrollDirection);

   });
 }

 render(){
   return (
     <HeaderContainer className={"main-header"} adjust={this.state.scrollDirection} lastScroll={this.state.lastScroll}>
      <Icon/>
     </HeaderContainer>
   )
 }
}

export default Header;