import React, { Component } from 'react';
import Loader from "./loader";
import styled, {keyframes} from "styled-components";
import GlobalStyle from '../styles/GlobalStyle';

const appear = keyframes`
from{
 opacity: 0;
}to{
 opacty: 1;
}
`;

const ChildrenContainer = styled.div`
 animation: ${appear} 1.2s linear;
`;

class Layout extends Component {
 state = {
  isLoading: true,
 };

 doneLoading = () => this.setState({ isLoading: false });

 render (){
  const {children} = this.props;
  return (
    <div>
     <GlobalStyle />
     {/*{ this.state.isLoading ?*/}
       {/*(<Loader doneLoading={this.doneLoading}/>) :*/}
       {/*(<ChildrenContainer className={"animate"}>{children}</ChildrenContainer>)*/}
     {/*}*/}
     <ChildrenContainer className={"animate"}>{children}</ChildrenContainer>
    </div>
   )
 }
}

export default Layout;
