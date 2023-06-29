import React, { useState, useEffect } from "react";

// useEffect used to change documnt title according to counter increase

const SimpleCounter = (props) => {
  const initialValue = props.initialValue;
  console.log(initialValue);
  const [value, setValue] = useState(initialValue);
  // Button onClick event handler
  const handleClick = () => {
    return setValue(value + 100);
    window.resizeTo(
      window.screen.availWidth - value,
      window.screen.availHeight - value
    );
  };
  // useEffect callback function
  function handleCounter() {
    return (document.title = `Count ${value}`);
  }

  //useEffect declaration

  useEffect(() => {
    console.log("useEffect");
    handleCounter();
  });
  console.log("render");
  return (
    <>
      <h2>Counter</h2>
      <h4>{value}</h4>
      <button className="btn" onClick={handleClick}>
        Increment
      </button>
    </>
  );
};

export default SimpleCounter;
