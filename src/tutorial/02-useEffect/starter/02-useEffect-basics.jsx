import { useEffect, useState } from "react";

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  //useEffect hook execute by default after  initial render or every re-render
  // useEffect hook second parameter as array called depencency array
  // this empty array [] indicates that useEffect runs only at initial render
  // if array have dependency element then useEffect runs whenever change occured in dependency element.
  useEffect(() => {
    console.log("useEffect execute on every render");
    if (value >= 1) {
      // excute only for value variable have non zero value
      document.title = `Click count ${value}`;
    }
  }, []); // for second value as empty array [], useEffect run only at initial render and can not execute if(){} block.

  console.log("component render");
  return (
    <>
      <h3>Counter</h3>
      <h4>{value}</h4>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
    </>
  );
};
export default UseEffectBasics;
