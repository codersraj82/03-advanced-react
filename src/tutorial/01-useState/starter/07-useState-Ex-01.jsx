import React, { useState } from "react";
import "../../../index.css";

const UseStateEx01 = () => {
  const [value, setValue] = useState(0);
  // functional approach with setTimeout
  // format setTimeOut(()=>,time_in_ms)
  const functionalCounter = () => {
    setTimeout(() => {
      // useState hook with functional approach it is used to hold current value .
      setValue((preValue) => {
        return preValue + 1;
      });
    }, 2000);
  };

  return (
    <>
      <h3>Counter</h3>
      <h4>{value}</h4>
      <button className="btn" onClick={() => setValue(value - 1)}>
        Decrease
      </button>
      <button className="btn" onClick={() => setValue(0)}>
        Reset
      </button>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increase
      </button>
      <h3>Counter using functional approach</h3>
      <h4>{value}</h4>
      <button className="btn" onClick={functionalCounter}>
        Functional Counter
      </button>
    </>
  );
};

export default UseStateEx01;
