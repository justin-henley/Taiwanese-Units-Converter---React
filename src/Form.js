import React from "react";
import Entry from "./Entry";
import { useState } from "react";
import { conversionValues } from "./conversions";

const Form = () => {
  const [entries, setEntries] = useState([
    {
      id: 0,
      value: 10,
      unit: "kg",
    },
    {
      id: 1,
      value: 20,
      unit: "pound",
    },
  ]);

  // Handles changes to the unit on either of the values
  const handleUnitChange = (unit, entryChanged) => {
    console.log(`Unit changed to ${unit} on entry ${entryChanged} `);

    const tempEntries = [...entries];
    tempEntries[entryChanged] = {
      id: entryChanged,
      value: entries[entryChanged].value,
      unit: unit,
    };

    // TODO the conversions

    setEntries(tempEntries);
  };

  // Handles changes to either number entry field
  const handleNumberChange = (value, entryChanged) => {
    console.log(`Number changed to ${value} on entry ${entryChanged} `);
    const tempEntries = [...entries];
    tempEntries[entryChanged] = {
      id: entryChanged,
      value: value,
      unit: entries[entryChanged].unit,
    };

    // TODO the conversions
    setEntries(tempEntries);
  };

  return (
    <form className="convertForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="inputA">Convert from:</label>
      <Entry
        id="inputA"
        key="0"
        box="0"
        entries={entries}
        numHandler={handleNumberChange}
        unitHandler={handleUnitChange}
        conversions={conversionValues}
      />
      <br />
      <label htmlFor="inputB">Convert to:</label>
      <Entry
        id="inputB"
        key="1"
        box="1"
        entries={entries}
        numHandler={handleNumberChange}
        unitHandler={handleUnitChange}
        conversions={conversionValues}
      />
    </form>
  );
};

export default Form;
