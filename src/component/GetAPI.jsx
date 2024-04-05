import React, { useState, useEffect } from "react";
import { data } from "./database";

export const GetAPI = () => {
  const [gUsers, setGUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [isListView, setIsListView] = useState(false);

  useEffect(() => {
    // Fetch initial user data
    setGUsers(data);
  }, []);

  const GitUser = ({ user }) => {
    if (!user) {
      return null; // Return null if user is undefined
    }

    return (
      <div className="git-user">
        <div className="git-user-info">
          <h2 className="git-user-id">{user.id}</h2>
          <h2 className="git-user-name">{user.name}</h2>
          <p className="git-user-completed">{user.completed}</p>
          <p className="git-user-description">{user.description}</p>
        </div>
      </div>
    );
  };

  return (
    <>
      {gUsers.map((user) => (
        <GitUser key={user.id} user={user} />
      ))}
    </>
  );
};