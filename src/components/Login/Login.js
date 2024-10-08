import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from "axios";
import './Login.css';

async function loginUser(credentials) {;
  let userToken = {};
  await axios.post('http://localhost:8080/login', credentials).then((response) => {
    userToken.token = response.data.token;
  }).catch((e) => {
    alert('Usuario e senha incorretos');
    return;
  });
  return userToken;
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    if (token.token) {
      setToken(token);
    }
  }

  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};