import React, { useState, useEffect } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const documnetTitle = () => {
    //document.title = `Couter ${value}`;
  };
  useEffect(() => {
    document.title = `Couter ${value}`;
  });
  return (
    <>
      <h3>Counter</h3>
      <h4>{value}</h4>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Increment
      </button>
    </>
  );
};

export default Counter;
