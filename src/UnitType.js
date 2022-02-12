import React from "react";

const UnitType = ({ unitTypes, typeHandler }) => {
  console.log(unitTypes);
  let key = 0;
  return (
    <div>
      {unitTypes.map((type) => {
        return (
          <button
            key={"type" + key++}
            onClick={(e) => typeHandler(e.target.value)}
            value={type}
          >
            {type}
          </button>
        );
      })}
    </div>
  );
};

export default UnitType;
