import React from "react";

const UnitOption = ({ unit, selected }) => {
  if (selected) {
    return (
      <option value={unit} selected>
        {unit}
      </option>
    );
  } else {
    return <option value={unit}>{unit}</option>;
  }
};

export default UnitOption;
