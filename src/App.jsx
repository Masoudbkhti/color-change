import React, { useState } from "react";

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
      <div>
        <select value={selectedColor} onChange={handleBoxColor}>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>
      <div
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: boxColor,
          marginTop: "20px",
        }}
      ></div>
    </>
  );
}

export default App;
