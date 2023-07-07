import React, { useState } from "react";

const FormInput = () => {
  const [person, setPerson] = useState({ firstName: "", age: "", email: "" });
  // const [firstName, setFirstName] = useState("hello");
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  return (
    <>
      <h2>User List</h2>
      <form action="" className="form">
        <div className=".form-label">
          <label htmlFor="firstName">Name: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={person.firstName}
            // onChange={(e) => setFirstName(e.target.value)}
            onChange={handleChange}
            placeholder="First Name"
          />
          <br />
          <label htmlFor="age">Age: </label>
          <input
            type="text"
            name="age"
            id="age"
            value={person.age}
            // onChange={(e) => setFirstName(e.target.value)}
            onChange={handleChange}
            placeholder="First Name"
          />
        </div>
      </form>
    </>
  );
};

export default FormInput;
