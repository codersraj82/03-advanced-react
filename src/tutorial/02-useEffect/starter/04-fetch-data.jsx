import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  // callback function for fetching data from github API with the help of async-await
  const userData = async () => {
    const response = await fetch(url);
    const userInfo = await response.json();
    setUsers(userInfo);
  };
  useEffect(() => {
    userData();
  }, []);

  console.log(users);
  return (
    <>
      <ul className="users">
        {users.map((user) => {
          const { login, id, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href="html_url">Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default FetchData;
