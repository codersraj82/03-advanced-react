import React, { useEffect, useState } from "react";

const Mutliinput = () => {
  const [person, setPerson] = useState({ firstName: "", age: "", email: "" });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const newPerson = { ...person, [name]: value };
    setPerson(newPerson);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setPeople([...people, person]);
    setPerson({ firstName: "", age: "", email: "" });
    console.log(people);
  };

  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form-label">
          <label htmlFor="firstName">Name: </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={person.firstName}
            onChange={handleChange}
            placeholder="Type first name"
          />
          <br />
          <label htmlFor="age">Age: </label>
          <input
            type="number"
            name="age"
            id="age"
            value={person.age}
            onChange={handleChange}
            placeholder="Type your age"
          />

          <br />
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={person.email}
            onChange={handleChange}
            placeholder="Type your email id"
          />
        </div>
        <button type="submit" className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </>
  );
};

export default Mutliinput;
