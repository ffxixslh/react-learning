import React from "react";

const NoJsx = () => {
  return React.createElement("div", {
    children: [{ type: "p", content: "hello" }],
  });
};

export default NoJsx;
