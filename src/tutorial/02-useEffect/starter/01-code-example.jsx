import React, { useState, useEffect } from "react";

const CodeExample = () => {
  const [value, setValue] = useState(window.innerWidth);

  const checkSize = () => {
    setValue(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    console.log("useEffect called");
    //event cleanup to trigger the event only once for change of size
    return () => {
      console.log("cleanup function for event is called");
      window.removeEventListener("resize", checkSize);
    };
  }); // instead of cleanup function empty array [] second parameter can be used. but good practices is to add cleanup function. It is very usefull when dealing with mulitiple event listener in project.

  return (
    <>
      <h4>Window</h4>
      <h5>{value} PX</h5>
    </>
  );
};
export default CodeExample;
