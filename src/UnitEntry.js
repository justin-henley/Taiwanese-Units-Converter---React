import React from "react";

const UnitEntry = ({ box, entries, unitHandler, conversions, unitType }) => {
  let listKey = 0;

  const units = Object.keys(conversions[unitType]);

  return (
    <select
      name={"select" + box}
      id={"select" + box}
      onChange={(e) => unitHandler(e.target.value, box)}
      value={entries[box].unit}
      className="UnitEntry"
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
