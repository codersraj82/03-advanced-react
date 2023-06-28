import React, { useReducer, useState, useEffect } from "react";
import Modal from "./modal";
import { custData } from "../../../data";

const Index = () => {
  const [people, setPeople] = useState(custData);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);
  const [message, setMessage] = useState("");
  const [warningColor, setWaringColor] = useState("");
  //console.log(people);
  //let message = "Please type name";
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email) {
      setPeople((people) => {
        return [
          ...people,
          { id: new Date().getTime().toString(), firstName, lastName, email },
        ];
      });
      // console.log(people);
      setModal(true);
      setWaringColor("feedback");
      setMessage("Successfully Added new user");
      setFirstName("");
      setLastName("");
      //setModal(false);
    } else {
      setModal(true);
      setWaringColor("warning");
      setMessage("Please type all fields");
    }
  };

  const handleDelete = (eleId, userName) => {
    setModal(true);
    setWaringColor("feedback");
    setMessage(`Successfully deleted id: ${eleId} ${userName}`);
    const filterArray = people.filter((ele) => {
      return ele.id !== eleId;
    });
    // console.log(people);
    console.log(filterArray);
    setPeople(filterArray);
  };
  // setModal(false);

  return (
    <>
      {modal && <Modal message={message} alertClass={warningColor} />}
      <form action="" className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          id="firstName"
          className="firstName"
          placeholder="Type firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          className="lastName"
          placeholder="Type lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="type email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <button type="submit" className="btn">
          Add person
        </button>
      </form>
      <table className="customers">
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {people.map((ele) => {
            const { id, firstName, lastName, email } = ele;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>
                  <span>
                    <button className="btn">Edit</button>
                    <button
                      className="btn"
                      onClick={() => handleDelete(id, firstName)}
                    >
                      Delete
                    </button>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Index;
