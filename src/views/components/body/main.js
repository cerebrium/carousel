import React from "react";
import "./style.css";

export const Main = ({ children, position }) => {
  return (
    <div className="mainContainer" style={{ left: position }}>
      {children}
    </div>
  );
};
