import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const complexCounter = () => {
    setTimeout(() => {
      // Functional approach to setValue to avoid delay issue in which it take old value instead of current value
      setValue((preValue) => {
        return preValue + 1;
      });
    }, 2000);
  };

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
      {/* Complex counter using setTimeOut */}

      <h3>Complex counter</h3>
      <h2>{value}</h2>
      <button className="btn" onClick={complexCounter}>
        complex Increase
      </button>
    </>
  );
};

export default UseStateCounter;
