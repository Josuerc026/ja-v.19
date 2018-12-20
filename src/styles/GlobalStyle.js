import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
   body{
    background: #282828;
   }
   *{
    font-family: sans-serif;
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
   h1,h2{
    color: #fff;
   }
   h3,h4,h5,h6, p, span{
    color: #AAAAAA;
   }
   .block{
    padding: 30px;
   }
   .container{
    max-width: 960px;
    margin: 0 auto;
   }
   .highlight,
    strong{
    display: inline-block;
    border-bottom: 3px solid #FF026C;
   }
   .mb-0{
    margin-bottom: 0;
   }
   
   .text-center{
    text-align: center;
   }
   
   @media (max-width: 768px){
    h1{
     font-size: 3.5rem;
    }
    h2{
     font-size: 2.5rem;
    }
    h3{
     font-size: 1.5rem;
    }
   }
  `;

export default GlobalStyle;
