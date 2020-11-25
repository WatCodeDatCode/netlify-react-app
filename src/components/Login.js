import React, { useState } from "react";
import axios from 'axios';
import './Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onUsernameChange = (event) => {
    setUsername(event.currentTarget.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    axios.post('https://demo-api-react-2020.herokuapp.com/login', {
        username,
        password
      }).then((response) => {
        const data = response.data
        const token = data.token;
        onLogin(token);
      }, (error) => {
        console.error(error);
        alert('Login invalid');
      });
      setUsername('');
      setPassword('');
  };

  return (
    <form>
      <label for="username">Username:</label>
      <input
        type="text"
        placeholder="Enter login address"
        name="username"
        value={username}
        onChange={onUsernameChange}
        required
      />

      <label for="password">Password:</label>
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        value={password}
        onChange={onPasswordChange}
        required
      />

      <button onClick={handleLogin}>Login</button>
    </form>
  );
};

export default Login;
