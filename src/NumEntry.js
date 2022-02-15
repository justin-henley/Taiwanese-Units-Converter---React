import React from "react";
import styled from "styled-components";

const NumEntry = ({ box, entries, numHandler, isDisabled }) => {
  let placeholder = parseInt(box) === 0 ? "From" : "To";

  return (
    <StyledInput
      id={"input" + box}
      type="text"
      inputMode="numeric"
      placeholder={placeholder}
      value={entries[box].value}
      disabled={isDisabled}
      onChange={(e) => numHandler(e.target.value, box)}
    />
  );
};

const StyledInput = styled.input`
  font-size: 2rem;
  width: 100%;
  border: none;
`;

export default NumEntry;
