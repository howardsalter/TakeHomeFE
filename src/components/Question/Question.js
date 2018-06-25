import React from "react";

const Question = ({ children }) => (
  <div
    style={{ paddingBottom: 30, clear: "both", textAlign: "left" }}
    className="typewriter"
  >
    {children}
  </div>
);

export default Question;
