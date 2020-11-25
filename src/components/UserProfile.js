import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";

const UserProfile = () => {
  const token = useContext(AuthContext);
  const [username, getUsername] = useState("");

  useEffect(() => {
    axios
      .get("https://demo-api-react-2020.herokuapp.com/user/me", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        (res) => {
          console.log(res.data);
          getUsername(res.data.username);
        },
        (error) => {
          console.error(error);
        }
      );
  }, [token]);

  return <div>Logged in as {username}</div>;
};

export default UserProfile;
