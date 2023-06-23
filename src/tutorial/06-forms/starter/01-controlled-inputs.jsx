import React, { useState } from "react";
const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  // const [person, setPerson] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, email);
    if (firstName && email) {
      // setPerson({
      //   firstName: firstName,
      //   email: email,
      // });
      // console.log(person);
      setPeople((people) => {
        return [
          ...people,
          { firstName, email, id: new Date().getTime().toString() },
        ];
      });
      // empty firstName and email value
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty input");
    }

    // setPerson({});
    console.log(people);
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
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <th>Email</th>
            <th>Action</th>
          </tr>
          {people.map((ele, index) => {
            const { firstName, email, id } = ele;

            return (
              <tr key={id} className="table">
                <td>{id}</td>
                <td>{firstName}</td>
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
export default ControlledInputs;
