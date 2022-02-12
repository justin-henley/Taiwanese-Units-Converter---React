import React from "react";

const UnitEntry = ({ box, entries, unitHandler }) => {
  const conversions = {
    kg: 10,
    lb: 5,
    g: 1,
    ton: 100,
  };

  let listKey = 0;

  const units = Object.keys(conversions);

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
