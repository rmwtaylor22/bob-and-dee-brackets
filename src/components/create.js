import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";

function Create() {
    const history = useHistory()
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    async function registerUser (event) {
      event.preventDefault()
      const response = await fetch('http://localhost:1337/api/user/register', {
      method: 'POST',  
      headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          username,
          password,
        }),
      })
  
      const data = await response.json()
  
      if(data.status === 'ok') {
        alert('Registered!')
        history.push('/login')
      } else {
        alert('Username already taken :(')
        setUsername("");
      }
    }

  // This following section will display the form that takes the input from the user.
    return (
      <div className="form-signin">
        <form onSubmit={registerUser}>
          <h1 className="h3 mb-3 fw-normal">Create Account</h1>
          <div className="form-floating">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              require
              type="text"
              placeholder="Name"
              className="form-control"
              id="floatingInput"
            />
            <label for="floatingInput">Name/ Nickname</label>
          </div>
          <div className="form-floating">
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              require
              type="text"
              placeholder="Username"
              className="form-control"
              id="floatingInput"
            />
            <label for="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              require
              type="password"
              placeholder="Password"
              className="form-control"
              id="floatingInput"
            />
            <label for="floatingInput">Password</label>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Register!"
              className="w-100 btn btn-lg btn-primary"
            />
          </div>
        </form>
      </div>
    );
}

export default Create;
