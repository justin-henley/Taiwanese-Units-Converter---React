import React from "react";
import styled from "styled-components";

const UnitEntry = ({ box, entries, unitHandler, conversions, unitType }) => {
  let listKey = 0;

  const units = Object.keys(conversions[unitType]);

  return (
    <StyledSelect
      name={"select" + box}
      id={"select" + box}
      onChange={(e) => unitHandler(e.target.value, box)}
      value={entries[box].unit}
    >
      {units.map((name) => {
        return (
          <option value={name} key={`${box} + ${listKey++}`}>
            {name}
          </option>
        );
      })}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  width: 100%;
  border-radius: 0;
`;

export default UnitEntry;
