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
  const styles = {
    input: {
      borderRadius: "10px 0 0 0",
    },
    output: {
      borderRadius: "0 10px 0 0",
      borderLeft: "none",
    },
  };
  return (
    <StyledForm onSubmit={(e) => e.preventDefault()}>
      <Label htmlFor="inputA">Convert from:</Label>
      <Entry
        key="0"
        box="0"
        entries={entries}
        numHandler={numHandler}
        unitHandler={unitHandler}
        conversions={conversions}
        unitType={unitType}
        isDisabled={false}
        // TODO this rounded style wont apply
        style={styles.input}
      />

      {/* <Swap /> */}
      <Label htmlFor="inputB">Convert to:</Label>
      <Entry
        key="1"
        box="1"
        entries={entries}
        numHandler={numHandler}
        unitHandler={unitHandler}
        conversions={conversions}
        unitType={unitType}
        isDisabled={true}
        // TODO this rounded style wont apply
        style={styles.output}
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
