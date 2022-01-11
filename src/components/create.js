import React, { Component } from "react";
// This will require to npm install axios
import axios from "axios";

export default class Create extends Component {
  // This is the constructor that stores the data.
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      username: "",
      password: "",
    };
  }

  // These methods will update the state properties.
  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();

    // When post request is sent to the create url, axios will add a new user(newperson) to the database.
    const newperson = {
      name: this.state.name,
      username: this.state.username,
      password: this.state.password,
    };
    

    // add user
    axios
      .post("http://localhost:5000/user/add", newperson)
      .then((res) => console.log(res.data));

    // We will empty the state after posting the data to the database
    this.setState({
      name: "",
      username: "",
      password: "",
    });
  }

  // This following section will display the form that takes the input from the user.
  render() {
    return (
      <div className="form-signin">
        <form onSubmit={this.onSubmit}>
          <h1 className="h3 mb-3 fw-normal">Create new account</h1>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              value={this.state.name}
              placeholder="Bob White"
              onChange={this.onChangeName}
              required
            />
            <label for="floatingInput">Name/ Nickname</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              value={this.state.username}
              placeholder="bwhite"
              onChange={this.onChangeUsername}
              required
            />
            <label for="floatingInput">Username</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingInput"
              value={this.state.password}
              placeholder="perryWhite123$"
              onChange={this.onChangePassword}
              required
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
}
