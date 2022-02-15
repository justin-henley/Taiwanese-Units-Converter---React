import React from "react";
import styled from "styled-components";

const Header = ({ appName }) => {
  return (
    <HeaderDiv>
      <H1>{appName}</H1>
    </HeaderDiv>
  );
};

const HeaderDiv = styled.header`
  width: 100%;
  height: 100px;
  background-color: darkslategray;
  color: white;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 5px 5px 0 0;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  font-weight: normal;
`;

export default Header;
