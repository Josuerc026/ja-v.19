import React, {Component} from "react";
import Menu from "./menu";
import MediaQuery from "react-responsive";
import styled, { keyframes } from 'styled-components';
import Icon from "./icon";

const HeaderContainer = styled.header`
 position: fixed;
 display: flex;
 width: 100%;
 justify-content: space-between;
 left: 0;
 top: ${props => (props.adjust === 'down' && props.lastScroll > 100 && props.mobileMenu === false ? '-100%' : '0') };
 background: ${props => (props.adjust === 'up' && props.lastScroll !== 0 ?  'rgba(33, 33, 33,0.85)' : 'none' ) };
 transition: 0.4s all ease-in-out;
 padding: 15px 30px;
 z-index: 9999;
 
 .menu{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0;
  li{
   list-style-type: none;
   padding-left: 10px;
   text-transform: lowercase;
   &:not(:last-child){
    padding-right: 10px;
   }
   margin: 0;
   a{
    text-decoration: none;
    color: #fff;
    
    &:hover,
    &:focus{
    border-bottom: 3px solid #ff006a;
   }
  }
 }
`;

const Hamburger = styled.button`
   padding: 15px 0;
   display: inline-block;
   cursor: pointer;
   transition-property: opacity, filter;
   transition-duration: 0.15s;
   transition-timing-function: linear;
   font: inherit;
   color: inherit;
   text-transform: none;
   background-color: transparent;
   border: 0;
   margin: 0;
   overflow: visible; 
   
   &:hover {
    opacity: 0.7; 
   }
   &.is-active:hover {
    opacity: 0.7; 
   }
   &.is-active .hamburger-inner,
   &.is-active .hamburger-inner::before,
   &.is-active .hamburger-inner::after {
     background-color: #fff; 
   }
 
   &.hamburger--spring .hamburger-inner{
     top: 2px;
     transition: background-color 0s 0.13s linear; 
   }
   &.hamburger--spring .hamburger-inner::before {
     top: 10px;
     transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); 
   }
   &.hamburger--spring .hamburger-inner::after {
     top: 20px;
     transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); 
   }

  &.hamburger--spring.is-active .hamburger-inner {
    transition-delay: 0.22s;
    background-color: transparent !important; 
  }
  &.hamburger--spring.is-active .hamburger-inner::before {
    top: 0;
    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 10px, 0) rotate(45deg); 
  }
  &.hamburger--spring.is-active .hamburger-inner::after {
    top: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 10px, 0) rotate(-45deg); 
  }

  &.hamburger--spring-r .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); 
  }
  &.hamburger--spring-r .hamburger-inner::after {
     top: -20px;
     transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), opacity 0s linear;     
  }
  &.hamburger--spring-r .hamburger-inner::before {
     transition: top 0.1s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1), transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19); 
  }

  &.hamburger--spring-r.is-active .hamburger-inner {
    transform: translate3d(0, -10px, 0) rotate(-45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); 
  }
  &.hamburger--spring-r.is-active .hamburger-inner::after {
    top: 0;
    opacity: 0;
    transition: top 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333), opacity 0s 0.22s linear;
  }
  &.hamburger--spring-r.is-active .hamburger-inner::before {
    top: 0;
    transform: rotate(90deg);
    transition: top 0.1s 0.15s cubic-bezier(0.33333, 0, 0.66667, 0.33333), transform 0.13s 0.22s cubic-bezier(0.215, 0.61, 0.355, 1); 
   }
`;

const HamburgerBox = styled.span`
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative; 
`;

const HamburgerInner = styled.span`
  display: block;
  top: 50%;
  margin-top: -2px;
  &, &::before, &::after {
    width: 40px;
    height: 4px;
    background-color: #fff;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease; 
  }
  &::before, &::after {
    content: "";
    display: block; 
  }
  &::before {
    top: -10px; 
  }
  &::after {
    bottom: -10px;
  }
`;

const animation = keyframes`
  0% {
    -webkit-transform: translateY(-1000px);
            transform: translateY(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    opacity: 1;
  }
`;

const MobileContainer = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 padding: 30px;
 height: 100%;
 background: #ff006a;
 animation: ${animation} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  
 .menu{
  padding-top: 60px;
  li{
   width: 100%;
   font-size: 3.5rem;
   text-transform: lowercase;
   text-align: right;
  }
 }
`;


class Header extends Component {

 constructor(props){
  super(props);
  this.toggleMenu = this.toggleMenu.bind(this);
 }

 state = {
  mobileMenu: false,
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
   });
 }

 toggleMenu(){
  this.setState({mobileMenu: !this.state.mobileMenu});
 }

 render(){
   return (
     <HeaderContainer className={"main-header"} adjust={this.state.scrollDirection} lastScroll={this.state.lastScroll} mobileMenu={this.state.mobileMenu}>
      {
       this.state.mobileMenu ?
         (
           <MobileContainer className={"mobile-container"} isOpen={this.state.mobileMenu}>
           <Menu mobile={this.toggleMenu}/>
           </MobileContainer>
         ) : ''
      }
      <Icon/>
      <MediaQuery minDeviceWidth={768}>
       {
        (matches) => {
         if(matches){
          return (<Menu/>);
         }else{
          return (
            <Hamburger className={`hamburger--spring ${this.state.mobileMenu ? 'is-active' : 'not-active'}`} onClick={this.toggleMenu}>
             <HamburgerBox>
              <HamburgerInner className={"hamburger-inner"}/>
             </HamburgerBox>
            </Hamburger>
          );
         }
        }
       }
      </MediaQuery>
     </HeaderContainer>
   )
 }
}

export default Header;