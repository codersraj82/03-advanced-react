import React, { useState, useEffect } from "react";

const GitUser = () => {
  const url = "https://api.github.com/users";
  const [gitUser, setGitUser] = useState([]);
  const gitUserData = async () => {
    const response = await fetch(url);
    const users = await response.json();
    console.log(users);
    setGitUser(users);
  };

  useEffect(() => {
    gitUserData();
  }, []);

  return (
    <>
      <h3>Git user list again</h3>;
      <table className="customers">
        <thead>
          <tr>
            <th>id</th>
            <th>Profile Photo</th>
            <th>Profile Name</th>
            <th>Profile Link</th>
          </tr>
        </thead>
        <tbody>
          {gitUser.map((user) => {
            const { id, login, avatar_url, html_url } = user;
            return (
              <tr>
                <td>{id}</td>
                <td>
                  <img src={avatar_url} width={"75rem"} alt={login} />
                </td>
                <td>{login}</td>
                <td>
                  <a href={html_url}>Check Profile</a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default GitUser;
