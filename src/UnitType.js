import React from "react";

const UnitType = ({ unitTypes, typeHandler, unitType }) => {
  let key = 0;
  return (
    <select
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
    </select>
  );
};

export default UnitType;
