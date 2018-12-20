import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';



export default ({ children }) => (
  <div>
   <GlobalStyle />
   {children}
   {/*<div className={"container"}>*/}

   {/*</div>*/}
  </div>
)