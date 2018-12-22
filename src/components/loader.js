import React, { Component } from "react";
import Icon from "./icon";
import styled, {keyframes} from "styled-components";

const outerAnimate = keyframes`
 from{
  opacity: 1;
 }
 to{
  opacity: 0;
 }
`;

const animate = keyframes`
  from {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-transform-origin: center center;
            transform-origin: center center;
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  10% {
    -webkit-transform: scale(0.91);
            transform: scale(0.91);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  17% {
    -webkit-transform: scale(0.98);
            transform: scale(0.98);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
  33% {
    -webkit-transform: scale(0.87);
            transform: scale(0.87);
    -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
  }
  45% {
    -webkit-transform: scale(1);
            transform: scale(1);
    -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
  }
`;

const LoaderContainer = styled.div`
 position: fixed;
 width: 100%;
 height: 100%;
 top: 0;
 left: 0;
 background: #282828;
 z-index: 999;
 display: flex;
 align-items: center;
 justify-content: center;
 animation: ${outerAnimate} 0.75s linear;
 animation-delay: 2.3s;
`;

const LoaderInner = styled.div`
 padding: 10px;
 animation: ${animate} 1.5s ease-in-out infinite both;
 
 div{
  width: 100px;
  height: 100px;
  &:before{
   font-size: 2rem;
  }
 }
`;


class Loader extends Component{
 componentDidMount() {
  this.animate();
 }
 animate(){
  const block = document.querySelector('.animate');
  const {doneLoading} = this.props;
  block.addEventListener('animationend', function(e){
   if(e.target.matches('.animate')){
    doneLoading();
   }
  });
 }
 render() {
  return (
    <LoaderContainer className={"animate"}>
     <LoaderInner>
      <Icon/>
     </LoaderInner>
    </LoaderContainer>
  )
 }

}

export default Loader;