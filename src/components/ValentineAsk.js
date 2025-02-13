import React, { useState } from "react";
import "./ValentineAsk.css";

const ValentineAskPage = ({ onYes }) => {
  const [noPosition, setNoPosition] = useState({ top: "50%", left: "60%" });

  const handleMouseEnter = () => {
    const randomX = Math.random() * 250 - 125;
    const randomY = Math.random() * 150 - 75;

    setNoPosition({
      top: `calc(50% + ${randomY}px)`,
      left: `calc(50% + ${randomX}px)`,
    });
  };

  return (
    <div className="valentine-ask-page">
      <h2>Will you be my Valentine?</h2>
      <div className="buttons-container">
        <button onClick={onYes} className="yes-button">
          Yes
        </button>

        <button
          className="no-button"
          style={noPosition}
          onMouseEnter={handleMouseEnter}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default ValentineAskPage;
