import React from "react";

const Gradient = ({ id }) => (
  <defs>
    <linearGradient id={id} x1="0%" y1="0%" x2="0%" y2="180%">
      <stop
        offset="0%"
        style={{
          stopColor: "#FFF200",
          stopOpacity: 1,
        }}
      />
      <stop
        offset="100%"
        style={{
          stopColor: "#525D68",
          stopOpacity: 1,
        }}
      />
    </linearGradient>
  </defs>
);

export default Gradient;
