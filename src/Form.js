import React from "react";
import Entry from "./Entry";
/* import Swap from "./Swap"; */
/* import { FaRightLeft } from "react-icons/fa"; */

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
        id="entry1"
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
      {/* <Swap /> */}
      <label htmlFor="inputB">Convert to:</label>
      <Entry
        id="entry2"
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
