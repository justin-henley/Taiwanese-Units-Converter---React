import React from "react";

const UnitEntry = ({ box, entries, unitHandler, conversions, unitType }) => {
  let listKey = 0;

  // TODO you hardcoded mass here
  const units = Object.keys(conversions[unitType]);

  return (
    <select
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
    </select>
  );
};

export default UnitEntry;
