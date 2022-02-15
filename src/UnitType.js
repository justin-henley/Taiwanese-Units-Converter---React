import React from "react";
import styled from "styled-components";

const UnitType = ({ unitTypes, typeHandler, unitType }) => {
  let key = 0;
  return (
    <StyledSelect
      name={"selectUnitType"}
      id={"selectUnitType"}
      onChange={(e) => typeHandler(e.target.value)}
      value={unitType}
      className="UnitType"
    >
      {unitTypes.map((type) => {
        return (
          <option value={type} key={type + key++}>
            {type}
          </option>
        );
      })}
    </StyledSelect>
  );
};

const StyledSelect = styled.select`
  width: 100%;
  border: 1px solid darkslategray;
  border-top: none;
  border-radius: 0 0 10px 10px;
  padding: 2px;
`;

export default UnitType;
