import { useState } from "react";

//user object declaration

const user = {
  name: "Serhan",
  age: 8,
  message: "Life is Great !!!",
};

const UseStateObject = () => {
  const [userData, setUserData] = useState(user);
  const changeData = () => {
    setUserData({ ...userData, name: "Sofiya", message: "Life is awesome" });
  };
  return (
    <>
      <h3>{userData.name}</h3>
      <h3>{userData.age}</h3>
      <h2>{userData.message}</h2>
      <button className="btn" onClick={changeData}>
        Change Data
      </button>
    </>
  );
};

export default UseStateObject;
