import React from "react";

function Register() {
  return (
    <div>
      <form>
        <h1 className="h3 mb-3 fw-normal">Register here.</h1>

        <div className="form-floating">
          <input
            type="name"
            className="form-control"
            id="floatingInput"
            placeholder="e.g. Bob White"
          />
          <label for="floatingInput">Name or Nickname</label>
        </div>
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

export default Register;
