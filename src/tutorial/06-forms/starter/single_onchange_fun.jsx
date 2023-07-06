import React, { useState } from "react";

const FormInput = () => {
  //const { person, setPerson } = useState({ firstName: "", age: "", email: "" });
  const [firstName, setFirstName] = useState("hello");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  return (
    <>
      <h2>User List</h2>
      <form action="" className="form">
        <div className="form-control">
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};

export default FormInput;
