import React from "react";
import Entry from "./Entry";
import { useState } from "react";
import { conversionValues, convertMeasure } from "./conversions";

const Form = ({ entries, numHandler, unitHandler, conversions, unitType }) => {
  return (
    <form className="convertForm" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="inputA">Convert from:</label>
      <Entry
        id="inputA"
        key="0"
        box="0"
        entries={entries}
        numHandler={numHandler}
        unitHandler={unitHandler}
        conversions={conversions}
        unitType={unitType}
      />
      <br />
      <label htmlFor="inputB">Convert to:</label>
      <Entry
        id="inputB"
        key="1"
        box="1"
        entries={entries}
        numHandler={numHandler}
        unitHandler={unitHandler}
        conversions={conversions}
        unitType={unitType}
      />
    </form>
  );
};

export default Form;
