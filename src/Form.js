import React from "react";
import styled from "styled-components";
import Entry from "./Entry";
/* import Swap from "./Swap"; */
/* import { FaRightLeft } from "react-icons/fa"; */

const Form = ({
  entries,
  numHandler,
  unitHandler,
  conversions,
  unitType,
  handleSwap,
}) => {
  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <Label htmlFor="inputA">Convert from:</Label>
      <Entry
        key="0"
        box="0"
        isOutput={false}
        entries={entries}
        numHandler={numHandler}
        unitHandler={unitHandler}
        conversions={conversions}
        unitType={unitType}
        isDisabled={false}
      />

      {/* <Swap /> */}
      <Label htmlFor="inputB">Convert to:</Label>
      <Entry
        key="1"
        box="1"
        isOutput={true}
        entries={entries}
        numHandler={numHandler}
        unitHandler={unitHandler}
        conversions={conversions}
        unitType={unitType}
        isDisabled={true}
      />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  position: absolute;
  left: -99999px;
`;

export default Form;
