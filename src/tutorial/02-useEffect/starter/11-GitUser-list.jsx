import React, { useState, useEffect } from "react";

const GitUser = () => {
  const url = "https://api.github.com/users";
  const [gituser, setGitUser] = useState([]);
  //useEffect hook to fetch user data at initial render
  // useEffect callback function
  const useEffectCallBack = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    setGitUser(users);
  };
  useEffect(() => {
    useEffectCallBack();
  }, []);

  return (
    <>
      <h3>Git user Profile</h3>
      <ul className="users">
        {gituser.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id} className="prof">
              <img src={avatar_url} alt={login} />
              <h4>{login}</h4>
              <a href={html_url}> Profile</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default GitUser;
