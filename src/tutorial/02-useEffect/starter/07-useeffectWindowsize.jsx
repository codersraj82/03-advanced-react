import React, { useState, useEffect } from "react";

const WindowSize = () => {
  const [size, setSize] = useState(window.innerWidth);
  const setWindowSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", setWindowSize);

    return () => window.removeEventListener("resize", setWindowSize);
  }, []);
  return <h2>{`Window size = ${size} Px`}</h2>;
};

export default WindowSize;
