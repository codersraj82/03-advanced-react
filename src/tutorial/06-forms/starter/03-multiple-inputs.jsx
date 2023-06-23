import React, { useState } from "react";

const MultipleInputs = () => {
  const [person, setPerson] = useState({ firstName: "", age: "", email: "" });
  const [people, setPeople] = useState([]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = { ...person, id: new Date().getTime().toString() };
    setPeople([...people, newPerson]);
    setPerson({ firstName: "", age: "", email: "" });
  };
  return (
    <>
      <article>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName" style={{ margin: "1rem" }}>
              Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="age" style={{ margin: "1rem" }}>
              Age
            </label>
            <input
              type="text"
              name="age"
              id="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email" style={{ margin: "1rem" }}>
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn">
            Add Person
          </button>
        </form>
        <table className="customers">
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          {people.map((ele, index) => {
            const { firstName, age, email, id } = ele;

            return (
              <tr key={id} className="table">
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{age}</td>
                <td>{email}</td>
                <td>
                  <span>
                    <button className="btn">Edit</button>
                    <button className="btn">Delete</button>
                  </span>
                </td>
              </tr>
            );
          })}
        </table>
      </article>
    </>
  );
};
export default MultipleInputs;
