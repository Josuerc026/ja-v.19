import React from 'react';
import GlobalStyle from '../styles/GlobalStyle';



export default ({ children }) => (
  <div>
   <div className={"container"}>
    <GlobalStyle />
    {children}
   </div>
  </div>
)