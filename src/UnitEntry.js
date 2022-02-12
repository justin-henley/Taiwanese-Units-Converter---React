import React from "react";
import UnitOption from "./UnitOption";

const UnitEntry = ({ box, entries, unitHandler }) => {
  const conversions = {
    kg: 10,
    lb: 5,
    g: 1,
    ton: 100,
  };

  const units = Object.keys(conversions);

  return (
    <select
      name={"select" + box}
      id={"select" + box}
      onChange={(e) => unitHandler(e.target.value, box)}
    >
      <UnitOption unit="hi" />
      <UnitOption unit="bye" selected="true" />
      {units.map((name) => {
        let match = name === entries[box].unit;
        console.log(name, match);
        return <UnitOption unit={name} selected={match} />;
      })}
    </select>
  );
};

export default UnitEntry;
