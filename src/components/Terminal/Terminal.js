import React from "react";

const Terminal = ({ children }) => (
  <div
    style={{ paddingBottom: 30, clear: "both", textAlign: "left" }}
    className="typewriter"
  >
    {children}
  </div>
);

export default Terminal;
