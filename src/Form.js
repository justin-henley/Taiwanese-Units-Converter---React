import React from "react";
import Entry from "./Entry";
import { useState } from "react";
import { conversionValues, convertMeasure } from "./conversions";

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

  // Convert values
  // TODO hardcoded mass as unit type
  const convertValue = (fromIndex, toIndex /* , unitType */) => {
    const toValue = convertMeasure(
      entries[fromIndex].value,
      entries[fromIndex].unit,
      entries[toIndex].unit,
      /* unitType */ "mass"
    );

    const tempEntries = [...entries];
    tempEntries[toIndex].value = toValue;
    setEntries(tempEntries);
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

    // TODO the conversions
    /* convertValue(entryChanged, entryChanged === 0 ? 1 : 0); */

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
