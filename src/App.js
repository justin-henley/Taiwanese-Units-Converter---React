import { useState } from "react";
import Form from "./Form";

function App() {
  const [entries, setEntries] = useState([
    {
      id: 0,
      value: 10,
      unit: "kg",
    },
    {
      id: 1,
      value: 20,
      unit: "lb",
    },
  ]);

  // Handles changes to the unit on either of the values
  const unitHandler = (value, entryChanged) => {
    console.log(`Unit changed to ${value} on entry ${entryChanged} `);
  };

  // Handles changes to either number entry field
  const numHandler = (value, entryChanged) => {
    console.log(`Number changed to ${value} on entry ${entryChanged} `);
  };

  return (
    <div className="App">
      <Form
        entries={entries}
        setEntries={setEntries}
        numHandler={numHandler}
        unitHandler={unitHandler}
      />
    </div>
  );
}

export default App;
