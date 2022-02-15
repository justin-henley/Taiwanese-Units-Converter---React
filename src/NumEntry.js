import React from "react";
import styled from "styled-components";

const NumEntry = ({ box, entries, numHandler, isDisabled }) => {
  let placeholder;
  if (box == 0) {
    placeholder = "From";
  } else {
    placeholder = "To";
  }
  return (
    <StyledInput
      id={"input" + box}
      className="numEntry"
      type="text"
      inputMode="numeric"
      placeholder={placeholder}
      value={entries[box].value}
      disabled={isDisabled}
      onChange={(e) => numHandler(e.target.value, box)}
      className="NumEntry"
    />
  );
};

const StyledInput = styled.input`
  font-size: 2rem;
  width: 100%;
  border: none;
`;

export default NumEntry;
