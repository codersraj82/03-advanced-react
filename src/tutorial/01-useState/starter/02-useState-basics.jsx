import React, { useState } from "react";
/*important note: 
# Hook name statrt use word
# component name must be statrted with uppercase ex UseStateBasic
#hook should be in function or component body className"
# cannot call conditionally
*/

const UseStateBasics = () => {
  // console.log(useState("hello people"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);
  //useState hook return array, hence need to destructure it.
  const [text, setText] = useState("random title ");
  const handleClick = () => {
    if (text === "random title ") {
      setText("Hello people");
    } else {
      setText("random title ");
    }
  };
  return (
    <>
      <h2>{text}</h2>
      <button className="btn" onClick={handleClick}>
        Change Title
      </button>
    </>
  );
};

export default UseStateBasics;
