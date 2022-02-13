import React from "react";
import Entry from "./Entry";
import { useState } from "react";
import { conversionValues, convertMeasure } from "./conversions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";

const Form = ({
  entries,
  numHandler,
  unitHandler,
  conversions,
  unitType,
  handleSwap,
}) => {
  return (
    <form className="Form" onSubmit={(e) => e.preventDefault()}>
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
        isDisabled={false}
      />
      <br />

      {/* <div id="swapDiv"> */}
      <FontAwesomeIcon
        role="button"
        tabIndex="0"
        onClick={handleSwap}
        aria-label={`Swap to and from values and units`}
        icon={faRightLeft}
        id="swapIcon"
      />
      {/* </div> */}

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
        isDisabled={true}
      />
    </form>
  );
};

export default Form;
