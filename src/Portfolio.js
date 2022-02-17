import React from "react";
import styled from "styled-components";

const Portfolio = () => {
  const today = new Date();
  const icons = {
    style: {
      padding: "0.25em",
      fontSize: ".9em",
    },
    color: {
      portfolio: "green",
    },
  };

  return (
    <PortfolioDiv>
      <H1>Find this app and more at</H1>
      <LinkButton
        href="https://www.justin-henley.com/"
        hoverColor={icons.color.portfolio}
        style={icons.style}
      >
        www.justin-henley.com
      </LinkButton>
      <Copyright id="copyright">
        &copy;{today.getFullYear()} Justin Henley
      </Copyright>
    </PortfolioDiv>
  );
};

const PortfolioDiv = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  background-color: darkslategray;
  color: white;
  margin: auto @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    width: 50%;
    margin: 0 1px 0 0;
    border-radius: 0 5px 0 5px;
  }
`;

const H1 = styled.h1`
  font-size: 1em;
  font-weight: normal;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const LinkButton = styled.a.attrs((props) => ({
  target: "blank",
  rel: "noopener noreferrer",
  href: props.href,
}))`
  display: inline-block;
  text-decoration: none;
  color: darkslategray;
  background-color: white;
  border-radius: 10px 0px 10px 0px;
  transition: all 0.2s ease-in-out;
  font-size: 1em
  padding: 0;
  margin: 5px;

  &:hover {
    color: ${(props) => props.hoverColor};
    transform: scale(1.2);
  }
`;

const Copyright = styled.p`
  font-size: 0.75rem;
`;

export default Portfolio;
