import React from "react";
import Form from "./Form";
import { conversionValues, convertMeasure } from "./conversions";
import { useState } from "react";
import UnitType from "./UnitType";

const Content = () => {
  const DECIMAL_PLACES = 8;
  const [entries, setEntries] = useState([
    {
      id: 0,
      value: 0,
      unit: "公斤 - Kilogram",
    },
    {
      id: 1,
      value: 0,
      unit: "公斤 - Kilogram",
    },
  ]);

  const [unitType, setUnitType] = useState("Mass");

  const handleUnitTypeChange = (type) => {
    // return early if current type is the same as clicked type
    if (type === unitType) return;

    // update unit type in state
    setUnitType(type);

    // swap entries for relevant defaults
    const newUnit =
      type === "Mass" ? "pound" : type === "Area" ? "sqmeter" : "meter";
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
    const tempEntries = [...entries];

    tempEntries[entryChanged].unit = unit;

    if (entries[0].value === "") {
      tempEntries[1].value = "";
    } else {
      tempEntries[1].value = convertMeasure(
        tempEntries[0].value,
        tempEntries[0].unit,
        tempEntries[1].unit,
        unitType
      );
    }

    setEntries(tempEntries);
  };

  // Handles changes to either number entry field
  const handleNumberChange = (value, entryChanged) => {
    const otherEntry = entryChanged == 1 ? 0 : 1;
    const tempEntries = [...entries];

    tempEntries[entryChanged].value = value;

    if (value === "") {
      tempEntries[otherEntry].value = "";
    } else {
      let convertedValue = convertMeasure(
        tempEntries[entryChanged].value,
        tempEntries[entryChanged].unit,
        tempEntries[otherEntry].unit,
        unitType
      );

      // Round the decimal
      let roundedValue = +convertedValue.toFixed(DECIMAL_PLACES);

      // Add rounded value to new entries
      tempEntries[otherEntry].value = roundedValue;
    }

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
        unitType={unitType}
      />
    </main>
  );
};

export default Content;
