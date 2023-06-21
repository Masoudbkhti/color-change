import React, { useState } from "react";
import Square from "./components/Square";
import Select from "./components/Select";
function App() {
  const [selectedColor, setSelectedColor] = useState("red");
  const [boxColor, setBoxColor] = useState("red");

  const handleBoxColor = (event) => {
    const color = event.target.value;
    setSelectedColor(color);
    setBoxColor(color);
  };
  return (
    <>
      <Select value={selectedColor} onChange={handleBoxColor} />
      <Square color={boxColor} />
    </>
  );
}

export default App;
