import React, { useState, useEffect } from "react";

const WindowSize = () => {
  // declare state to hold window size.
  const [size, setSize] = useState(window.innerWidth);
  // event handle for window size for onChange event
  const handleEvent = () => {
    return setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleEvent);
    document.title = `Window size ${size} px`;
    return () => {
      window.removeEventListener("resize", handleEvent);
    };
  });

  return (
    <>
      <h2>window size</h2>;<h4>{`${size} Px`}</h4>
    </>
  );
};

export default WindowSize;
