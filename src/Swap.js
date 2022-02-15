import React from "react";
import { FaIcons } from "react-icons/fa";
import styled from "styled-components";

const Swap = ({ handleSwap }) => {
  return (
    <SwapDiv>
      <StyledSwapIcon handleSwap />
    </SwapDiv>
  );
};

const SwapDiv = styled.div`
height: 84px;
padding: 0.5rem;
/* border: 2px solid gray;
display: flex;
align-items: flex-start;
justify-content: center;
background-color: black;
`;

const SwapIcon = ({ className, children, handleSwap }) => (
  <FaIcons
    className={className}
    role="button"
    tabIndex="0"
    onClick={handleSwap}
    aria-label={`Swap to and from values and units`}
  >
    {children}
  </FaIcons>
);

const StyledSwapIcon = styled(SwapIcon)`
  transition: all 0.2s ease-in-out;
  background-color: lightgray;
  color: black;
  border: 2px solid gray;
  border-radius: 3px;
  height: 100px;
  width: 30px;

  &:hover {
    color: black;
    background-color: darkgray;
    transform: scale(1.1);
  }
`;

export default Swap;
