import React, { useState } from "react";
import data from "../starter/projectDataBase";

const BirthDayProject = () => {
  const [profData, setProfData] = useState(data);
  console.log(profData);
  const deleteProfile = (id) => {
    const filterArray = profData.filter((elementObj) => elementObj.id !== id);
    setProfData(filterArray);
  };
  return (
    <>
      <h2>Birth Day Calender</h2>;
      {profData.map((objElement) => {
        return (
          <div className="profile" key={objElement.id}>
            <img src={objElement.photo} alt="" className="photo" />
            <div>
              <h4>{objElement.name}</h4>
              <h6>{objElement.age + objElement.year}</h6>
              <button
                className="btn"
                onClick={() => deleteProfile(objElement.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
      <button className="btn" onClick={() => setProfData([])}>
        Clear All
      </button>
    </>
  );
};

export default BirthDayProject;
