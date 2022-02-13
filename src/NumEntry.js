import React from "react";

const NumEntry = ({ box, entries, numHandler, isDisabled }) => {
  console.log(`box ${box} is ${isDisabled} `);
  return (
    <input
      id={"input" + box}
      className="numEntry"
      type="text"
      inputMode="numeric"
      placeholder="Convert from"
      value={entries[box].value}
      disabled={isDisabled}
      onChange={(e) => numHandler(e.target.value, box)}
      className="NumEntry"
    />
  );
};

export default NumEntry;
