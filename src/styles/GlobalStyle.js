import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   body{
    background: #212121;
   }
   *{
    font-family: sans-serif;
    letter-spacing: -0.035em;
   }
   h1{
    font-size: 4rem;
   }
   h2{
    font-size: 3rem;
   }
   h3{
    font-size: 2rem;
   }
   h4{
    font-size: 1.5rem;
   }
   h1{
    color: #fff;
   }
   h2{
    color: #6d6c6c;
   }
   h3,h4,h5,h6, p, span{
    color: #AAAAAA;
   }
   p{
    font-size: 1.2rem;
   }
   p,small,span, ul li, li, code{
    color: #bdbdbd;
   }
   .block{
    padding: 30px;
   }
   .container .block{
    padding-bottom: 30%;
   }
   .container{
    max-width: 960px;
    margin: 0 auto;
   }
   .highlight,
    strong{
    display: inline-block;
    border-bottom: 4px solid #FF026C;
   }
   .w-100{
    width: 100%;
   }
   .mt-3{
    margin-top: 10px;
   }
   .mt-5{
    margin-top: 30px;
   }
   .mb-3{
    margin-bottom: 10px;
   }
   .mb-0{
    margin-bottom: 0;
   }
   .d-block{
    display: block;
   }
   .text-center{
    text-align: center;
   }
   .screen-reader-text {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    word-wrap: normal !important;
   }
   @media (max-width: 768px){
    h1{
     font-size: 3.5rem;
    }
    h2{
     font-size: 2.25rem;
    }
    h3{
     font-size: 1.5rem;
    }
   }
  `;

export default GlobalStyle;
