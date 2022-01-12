/* import React, { Component, useEffect } from "react";
// This will require to npm install axios

const Leaderboard = () => {


  return <h1>Hello world</h1>
}

export default Leaderboard
 */

import React, { Component } from "react";
// This will require to npm install axios
import axios from "axios";
import { Link } from "react-router-dom";

const User = (props) => (
  <tr>
    <td>{props.user.name}</td>
    <td>{props.user.username}</td>
    <td>{props.user.password}</td>
    <td>{props.user.points}</td>
    <td>
      <Link to={"/edit/" + props.user._id}>Edit</Link> |
      <a
        href="/"
        onClick={() => {
          props.deleteUser(props.user._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default class Leaderboard extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.deleteUser = this.deleteUser.bind(this);
    this.state = { users: [] };
  }

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/user/")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will delete a user based on the method
  deleteUser(id) {
    axios.delete("http://localhost:5000/" + id).then((response) => {
      console.log(response.data);
    });

    this.setState({
      user: this.state.users.filter((el) => el._id !== id),
    });
  }

  // This method will map out the users on the table
  userList() {
    return this.state.users.map((currentuser) => {
      return (
        <User
          user={currentuser}
          deleteUser={this.deleteUser}
          key={currentuser._id}
        />
      );
    });
  }

  // This following section will display the table with the users of individuals.
  render() {
    return (
      <div className="leaderboard">
        <h3>Leaderboard</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Password</th>
              <th>Points</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.userList()}</tbody>
        </table>
      </div>
    );
  }
}