import React, { useEffect } from "react";
import { useState } from "react";

const App = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [canMove, setCanMove] = useState(true);
  const dotStyle = {
    backgroundColor: "pink",
    borderRadius: "50%",
    width: "2rem",
    height: "2rem",
    top: "-1rem",
    left: "-1rem",
    position: "absolute",
    transform: `translate(${position.x}px, ${position.y}px)`,
    opacity: "0.6",
    pointerEvents: "none",
  };

  useEffect(() => {
    const handleMove = (e) => {
      if (canMove) {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }
    };
    window.addEventListener("pointermove", handleMove);

    return () => window.removeEventListener("pointermove", handleMove);
  }, [canMove]);

  return (
    <div>
      <label>
        <input type="checkbox" checked={canMove} onChange={(e) => setCanMove(!canMove)} />
        The dot is draggable.
      </label>
      <div style={dotStyle}></div>
    </div>
  );
};

export default App;
