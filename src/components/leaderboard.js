import React, { Component } from "react";
// This will require to npm install axios
import axios from "axios";
import { Link } from "react-router-dom";

const User = (props) => (
  <tr>
    <td>{props.user.name}</td>
    <td>{props.user.points}</td>
  </tr>
);

export default class Leaderboard extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
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

  // This method will map out the users on the table
  userList() {
    return this.state.users.map((currentuser) => {
      return (
        <User
          user={currentuser}
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
              <th>Points</th>
            </tr>
          </thead>
          <tbody>{this.userList()}</tbody>
        </table>
      </div>
    );
  }
}
