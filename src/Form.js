import React from "react";
import Entry from "./Entry";
import { useState } from "react";

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
      unit: "lb",
    },
  ]);

  // Handles changes to the unit on either of the values
  const handleUnitChange = (value, entryChanged) => {
    console.log(`Unit changed to ${value} on entry ${entryChanged} `);
  };

  // Handles changes to either number entry field
  const handleNumberChange = (value, entryChanged) => {
    console.log(`Number changed to ${value} on entry ${entryChanged} `);
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
      />
    </form>
  );
};

export default Form;
