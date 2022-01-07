import React, { useState } from "react";
import { ReactDOM } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Login() {
  const [token, setToken] = useState();
  return (
    <div className="form-signin">
      <form>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
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
