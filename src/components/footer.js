import React from "react";
import styled from "styled-components";
import Social from "./social";


const Footer = styled.footer`
 background: #1d1d1dbd;
`;

const InnerFooter = styled.div`
 position: relative;
`;

export default () => (
  <Footer>
   <InnerFooter className={"container block"}>
    <Social gitHub={"https://github.com/Josuerc026"} linkedIn={"https://www.linkedin.com/in/josue-arce-8b147b108/"} />
    <small className={"mb-0 text-center d-block"}>Built & Designed by Josue Arce</small>
   </InnerFooter >
  </Footer>
)