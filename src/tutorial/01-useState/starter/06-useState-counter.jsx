import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  return (
    <>
      <h3>Simple Counter</h3>
      <h2>{value}</h2>
      <button
        className="btn"
        onClick={() => {
          setValue(value - 1);
        }}
      >
        Decrease
      </button>
      <span>/t</span>
      <button
        className="btn"
        onClick={() => {
          setValue(0);
        }}
      >
        Reset
      </button>
      <span>/t</span>
      <button
        className="btn"
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increase
      </button>
    </>
  );
};

export default UseStateCounter;
