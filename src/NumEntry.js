import React from "react";

const NumEntry = ({ box, entries, numHandler, isDisabled }) => {
  let placeholder;
  if (box == 0) {
    placeholder = "From";
  } else {
    placeholder = "To";
  }
  return (
    <input
      id={"input" + box}
      className="numEntry"
      type="text"
      inputMode="numeric"
      placeholder={placeholder}
      value={entries[box].value}
      disabled={isDisabled}
      onChange={(e) => numHandler(e.target.value, box)}
      className="NumEntry"
    />
  );
};

export default NumEntry;
