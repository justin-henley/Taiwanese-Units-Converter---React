import React from "react";
import Form from "./Form";
import { conversionValues, convertMeasure } from "./conversions";
import { useState } from "react";
import UnitType from "./UnitType";

const Content = () => {
  const [entries, setEntries] = useState([
    {
      id: 0,
      value: 0,
      unit: "kg",
    },
    {
      id: 1,
      value: 0,
      unit: "kg",
    },
  ]);

  const [unitType, setUnitType] = useState("mass");

  const handleUnitTypeChange = (type) => {
    console.log("changed type to " + type);
    //TODO

    // return early if current type is the same as clicked type
    if (type === unitType) return;

    // update unit type in state
    setUnitType(type);

    // swap entries for relevant defaults
    const newUnit =
      type === "mass" ? "pound" : type === "area" ? "sqmeter" : "meter";
    const newEntries = [
      {
        id: 0,
        value: 0,
        unit: newUnit,
      },
      {
        id: 1,
        value: 0,
        unit: newUnit,
      },
    ];
    setEntries(newEntries);
  };

  // Swaps the input and output values and units
  const handleSwap = () => {
    const newEntries = [
      {
        id: 0,
        value: entries[1].value,
        unit: entries[1].unit,
      },
      {
        id: 1,
        value: entries[0].value,
        unit: entries[0].unit,
      },
    ];

    setEntries(newEntries);
  };

  // Handles changes to the unit on either of the values
  const handleUnitChange = (unit, entryChanged) => {
    console.log(`Unit changed to ${unit} on entry ${entryChanged} `);
    const otherEntry = entryChanged == 1 ? 0 : 1;
    const tempEntries = [...entries];

    tempEntries[entryChanged].unit = unit;

    tempEntries[otherEntry].value = convertMeasure(
      tempEntries[entryChanged].value,
      tempEntries[entryChanged].unit,
      tempEntries[otherEntry].unit,
      "mass"
    );

    setEntries(tempEntries);
  };

  // Handles changes to either number entry field
  const handleNumberChange = (value, entryChanged) => {
    console.log(`Number changed to ${value} on entry ${entryChanged} `);
    const otherEntry = entryChanged == 1 ? 0 : 1;
    const tempEntries = [...entries];

    tempEntries[entryChanged].value = value;

    tempEntries[otherEntry].value = convertMeasure(
      tempEntries[entryChanged].value,
      tempEntries[entryChanged].unit,
      tempEntries[otherEntry].unit,
      "mass"
    );

    // TODO the conversions
    setEntries(tempEntries);
  };
  return (
    <main className="Content">
      <Form
        entries={entries}
        numHandler={handleNumberChange}
        unitHandler={handleUnitChange}
        conversions={conversionValues}
        unitType={unitType}
        handleSwap={handleSwap}
      />
      <UnitType
        unitTypes={Object.keys(conversionValues)}
        typeHandler={handleUnitTypeChange}
      />
    </main>
  );
};

export default Content;
