import React from "react";

const NumEntry = ({ box, entries, numHandler }) => {
  return (
    <input
      id={"input" + box}
      className="numEntry"
      type="number"
      placeholder="Convert from"
      value={entries[box].value}
      onChange={(e) => numHandler(e.target.value, box)}
    />
  );
};

export default NumEntry;
