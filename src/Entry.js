import React from "react";
import NumEntry from "./NumEntry";
import UnitEntry from "./UnitEntry";

const Entry = ({ box, entries, numHandler, unitHandler, conversions }) => {
  return (
    <fieldset>
      <NumEntry box={box} entries={entries} numHandler={numHandler} />
      <UnitEntry
        box={box}
        entries={entries}
        unitHandler={unitHandler}
        conversions={conversions}
      />
    </fieldset>
  );
};

export default Entry;
