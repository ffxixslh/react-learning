import React, { useState, useEffect, memo } from "react";
import { Component } from "react";
import { createPortal } from "react-dom";

const rootEl = document.getElementById("root");
const modalRootEl = document.getElementById("modal");

const Modal = ({ children }) => {
  const el = document.createElement("div");

  useEffect(() => {
    modalRootEl.appendChild(el);
    return () => {
      modalRootEl.removeChild(el);
    };
  });

  return createPortal(children, el);
};

const modalStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  left: 0,
};

const Portals = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((count) => count + 1);
  };

  return (
    <div onClick={handleClick}>
      <div>count:{count}</div>
      Open up the browser DevTools to observe that the button is not a child of
      the div with the onClick handler.
      <Modal>
        <Child />
      </Modal>
    </div>
  );
};

const Child = () => {
  return (
    <div style={modalStyle}>
      <button>click</button>
    </div>
  );
};
export default Portals;
