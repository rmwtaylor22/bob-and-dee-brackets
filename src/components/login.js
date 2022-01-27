import React, { useState } from "react";
/* import { ReactDOM } from "react";
import { PropTypes } from "prop-types";
import { Link } from 'react-router-dom'; */

/* async function loginUser(credentials) {
  return fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  }; */

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:1337/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if(data.user) {
      alert('Login successful')
      window.location.href = '/'
    } else {
      alert('Please check your username and password')
    }

    console.log(data);
  }

  return (
    <div className="form-signin launch-page-padding">
      <form onSubmit={loginUser}>
        <h1 className="h3 mb-3 fw-normal">Login</h1>

        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="bobwhite"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label for="floatingInput">Username</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
}

export default Login;

/* Login.propTypes = {
  setToken: PropTypes.func.isRequired,
}; */
