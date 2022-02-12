import React from "react";
import Entry from "./Entry";

const Form = ({ entries, setEntries, numHandler, unitHandler }) => {
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
      />
    </form>
  );
};

export default Form;
