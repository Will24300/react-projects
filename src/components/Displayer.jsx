import React from "react";

function Displayer({ arr }) {
  return (
    <>
      <ul>
        {arr.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default Displayer;
