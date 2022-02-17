import React from "react";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterDiv>
      <Portfolio />
      <Contact />
    </FooterDiv>
  );
};

const FooterDiv = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: 100%;

  @media only screen and (min-width: 600px) {
    flex-direction: row;
    width: 100%;
    height: 100px;
  }
`;

export default Footer;
