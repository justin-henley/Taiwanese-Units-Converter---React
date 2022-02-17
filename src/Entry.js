import React from "react";
import styled, { css } from "styled-components";
import NumEntry from "./NumEntry";
import UnitEntry from "./UnitEntry";

const Entry = ({
  isOutput,
  box,
  entries,
  numHandler,
  unitHandler,
  conversions,
  unitType,
  isDisabled,
}) => {
  return (
    <StyledFieldset isOutput={isOutput}>
      <NumEntry
        box={box}
        entries={entries}
        numHandler={numHandler}
        isDisabled={isDisabled}
      />
      <UnitEntry
        box={box}
        entries={entries}
        unitHandler={unitHandler}
        conversions={conversions}
        unitType={unitType}
      />
    </StyledFieldset>
  );
};

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  height: 80px;
  padding: 0.5rem;
  border: 2px solid gray;
  border-radius: 10px 10px 0 0;

  ${(props) =>
    props.isOutput &&
    css`
      border-radius: 0;
    `}

  @media only screen and (min-width: 600px) {
    height: 80px;
    padding: 0.5rem;
    border: 2px solid gray;
    border-radius: 10px 0 0 0;
    ${(props) =>
      props.isOutput &&
      css`
        border-radius: 0 10px 0 0;
        border-left: none;
      `}
  }
`;

export default Entry;
