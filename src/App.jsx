import React, { useState } from "react";

const App = () => {
  const [bgColor, setBgColor] = useState("#ffffff");

  // Generate a random hex color
  const generateRandomColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgColor(randomColor);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bgColor,
        transition: "background-color 0.5s ease",
      }}
    >
      <button
        onClick={generateRandomColor}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Change Background Color
      </button>
    </div>
  );
};

export default App;
