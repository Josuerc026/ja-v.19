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

const textAnimate = keyframes`
  0% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`;

const iconAnimate = keyframes`
 0% {
    opacity: 0;
    -webkit-transform: translateY(25px);
            transform: translateY(25px);
  }
  100% {
     opacity: 1;
    -webkit-transform: translateY(0);
            transform: translateY(0);
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
 animation-delay: 2s;
`;

const LoaderInner = styled.div`
 padding: 10px;
 
 > div{
  animation: ${iconAnimate} 0.65s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  transform-style: preserve-3d;
  -webkit-transform-style: preserve-3d;
  width: 75px;
  height: 75px;
  &:before{
   font-size: 1.5rem;
  }
 }
`;

const Text = styled.h1`
 animation: ${textAnimate} 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
 transform-style: preserve-3d;
 animation-delay: 0.85s;
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
     <LoaderInner className={"text-center"}>
      <Icon/>
     </LoaderInner>
     <Text className={"mb-0"}>hi there.</Text>
    </LoaderContainer>
  )
 }

}

export default Loader;