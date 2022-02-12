import React from "react";
import NumEntry from "./NumEntry";
import UnitEntry from "./UnitEntry";

const Entry = ({ box, entries, numHandler, unitHandler }) => {
  return (
    <fieldset>
      <NumEntry box={box} entries={entries} numHandler={numHandler} />
      <UnitEntry box={box} entries={entries} unitHandler={unitHandler} />
    </fieldset>
  );
};

export default Entry;
