import { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" style={{ margin: "1rem" }}>
            Name
          </label>
          <input type="text" name="name" id="name" ref={refContainer} />
          <button type="submit" className="btn">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
