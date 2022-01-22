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

const Game = (props) => (
  <tr>
    <td>{props.user.teamA.name}</td>
    <td>{props.user.teamB.name}</td>
  </tr>
);

export default class Leaderboard extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.state = { users: [], winners: [] };
  }

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/picks/")
      .then((response) => {
        this.setState({ users: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("http://localhost:5000/games/won")
      .then((response) => {
        this.setState({ winners: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will map out the users on the table
  userList() {
    return this.state.users.map((currentuser) => {
      return <User user={currentuser} key={currentuser._id} />;
    });
  }

  winnersList() {
    return this.state.winners.map((currentuser) => {
      return <Game user={currentuser} key={currentuser._id} />;
    });
  }

  // This following section will display the table with the users of individuals.
  render() {
    return (
      <div className="leaderboard-container">
        <div className="leaderboard-image bob"><img src={require("./bob2.png")} width={"245px"} height={"245px"}></img></div>
        <div className="leaderboard panel panel-default">
          <h3>Leaderboard</h3>
          <table
            className="table table-striped table-dark table-bordered"
            style={{ marginTop: 20 }}
          >
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>{this.userList()}</tbody>
          </table>
        </div>
        <div className="leaderboard-image donna"><img src={require("./donna.png")} width={"245px"} height={"245px"}></img></div>
      </div>
    );
  }
}
