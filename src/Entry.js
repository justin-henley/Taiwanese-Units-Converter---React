import React from "react";
import NumEntry from "./NumEntry";
import UnitEntry from "./UnitEntry";

const Entry = ({
  id,
  box,
  entries,
  numHandler,
  unitHandler,
  conversions,
  unitType,
  isDisabled,
}) => {
  return (
    <fieldset className="Entry" id={id}>
      <NumEntry
        box={box}
        entries={entries}
        numHandler={numHandler}
        isDisabled={isDisabled}
      />
      <UnitEntry
        box={box}
        entries={entries}
        unitHandler={unitHandler}
        conversions={conversions}
        unitType={unitType}
      />
    </fieldset>
  );
};

export default Entry;
