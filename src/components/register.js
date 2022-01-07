import React, { SyntheticEvent, useState } from "react";

const Register = () => {
  const [name, setName] = useState('');
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // couldn't add synthetic event, may cause bugs later
  const submit = async(e) => {
    e.preventDefault();

    const response = await fetch("https://localhost:8000/user/register", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
          name,
          email,
          password
      })
      });

      const content = await response.json();

      console.log(content);
  }

  return (
    <div className="form-signin">
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Register</h1>

        <div className="form-floating">
          <input
            className="form-control"
            id="floatingInput"
            placeholder="e.g. Bob White"
            required
            onChange={e => setName(e.target.value)}
          />
          <label for="floatingInput">Name or Nickname</label>
        </div>
        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
            onChange={e => setUsername(e.target.value)}
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            required
            onChange={e => setPassword(e.target.value)}
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
