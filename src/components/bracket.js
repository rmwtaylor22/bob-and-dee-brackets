import React, { Component } from "react";
import axios from "axios";
import "../App.css";

const GameSM = (props) => (
  <tr>
    <br></br>
    <tr>
      <td>{props.game.teamA.seed}</td>
      <td><b>{props.game.teamA.name}</b></td>
    </tr>
    <tr>
      <td>{props.game.teamB.seed}</td>
      <td><b>{props.game.teamB.name}</b></td>
    </tr>
    <br></br>
  </tr>
);

const GameEW = (props) => (
  <tr>
    <br></br>
    <tr className="table-just">
      <td className="table-right-just"><b>{props.game.teamA.name}</b></td>
      <td className="table-right-just table-num">{props.game.teamA.seed}</td>
    </tr>
    <tr>
      <td className="table-right-just"><b>{props.game.teamB.name}</b></td>
      <td className="table-right-just table-num">{props.game.teamB.seed}</td>
    </tr>
    <br></br>
  </tr>
);

const GameDropDown = (props) => (
  <>
    <option disabled selected value=""></option>
    <option key={props.game.teamA.name}>{props.game.teamA.name}</option>
    <option key={props.game.teamB.name}>{props.game.teamB.name}</option>
  </>
);

export default class Bracket extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: "",
      gamesWest: [],
      gamesEast: [],
      gamesSouth: [],
      gamesMidwest: [],
      inputs: {
        // first row
        d1: "",
        d2: "",
        d3: "",
        d4: "",
        d5: "",
        d6: "",
        d7: "",
        d8: "",
        d9: "",
        d10: "",
        d11: "",
        d12: "",
        d13: "",
        d14: "",
        d15: "",
        d16: "",
        // second
        d17: "",
        d18: "",
        d19: "",
        d20: "",
        d21: "",
        d22: "",
        d23: "",
        d24: "",
        // third
        d25: "",
        d26: "",
        d27: "",
        d28: "",
        // fourth
        d29: "",
        d30: "",
        // fifth
        d31: "",
        d32: "",
        d33: "",
        // fourth
        d34: "",
        d35: "",
        //third
        d36: "",
        d37: "",
        d38: "",
        d39: "",
        // second
        d40: "",
        d41: "",
        d42: "",
        d43: "",
        d44: "",
        d45: "",
        d46: "",
        d47: "",
        // last row
        d48: "",
        d49: "",
        d50: "",
        d51: "",
        d52: "",
        d53: "",
        d54: "",
        d55: "",
        d56: "",
        d57: "",
        d58: "",
        d59: "",
        d60: "",
        d61: "",
        d62: "",
        d63: "",
      },
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleChange({ target }) {
    this.setState({
      ...this.state,
      inputs: {
        ...this.state.inputs,
        [target.name]: target.value,
      },
    });
  }

  // This function will handle the submission.
  onSubmit(e) {
    e.preventDefault();

    // When post request is sent to the create url, axios will add a new user(newperson) to the database.
    const newperson = {
      name: this.state.name,
      choices: {
        d1: this.state.inputs.d1,
        d2: this.state.inputs.d2,
        d3: this.state.inputs.d3,
        d4: this.state.inputs.d4,
        d5: this.state.inputs.d5,
        d6: this.state.inputs.d6,
        d7: this.state.inputs.d7,
        d8: this.state.inputs.d8,
        d9: this.state.inputs.d9,
        d10: this.state.inputs.d10,
        d11: this.state.inputs.d11,
        d12: this.state.inputs.d12,
        d13: this.state.inputs.d13,
        d14: this.state.inputs.d14,
        d15: this.state.inputs.d15,
        d16: this.state.inputs.d16,
        // second
        d17: this.state.inputs.d17,
        d18: this.state.inputs.d18,
        d19: this.state.inputs.d19,
        d20: this.state.inputs.d20,
        d21: this.state.inputs.d21,
        d22: this.state.inputs.d22,
        d23: this.state.inputs.d23,
        d24: this.state.inputs.d24,
        // third
        d25: this.state.inputs.d25,
        d26: this.state.inputs.d26,
        d27: this.state.inputs.d27,
        d28: this.state.inputs.d28,
        // fourth
        d29: this.state.inputs.d29,
        d30: this.state.inputs.d30,
        // fifth
        d31: this.state.inputs.d31,
        d32: this.state.inputs.d32,
        d33: this.state.inputs.d33,
        // fourth
        d34: this.state.inputs.d34,
        d35: this.state.inputs.d35,
        //third
        d36: this.state.inputs.d36,
        d37: this.state.inputs.d37,
        d38: this.state.inputs.d38,
        d39: this.state.inputs.d39,
        // second
        d40: this.state.inputs.d40,
        d41: this.state.inputs.d41,
        d42: this.state.inputs.d42,
        d43: this.state.inputs.d43,
        d44: this.state.inputs.d44,
        d45: this.state.inputs.d45,
        d46: this.state.inputs.d46,
        d47: this.state.inputs.d47,
        // last row
        d48: this.state.inputs.d48,
        d49: this.state.inputs.d49,
        d50: this.state.inputs.d50,
        d51: this.state.inputs.d51,
        d52: this.state.inputs.d52,
        d53: this.state.inputs.d53,
        d54: this.state.inputs.d54,
        d55: this.state.inputs.d55,
        d56: this.state.inputs.d56,
        d57: this.state.inputs.d57,
        d58: this.state.inputs.d58,
        d59: this.state.inputs.d59,
        d60: this.state.inputs.d60,
        d61: this.state.inputs.d61,
        d62: this.state.inputs.d62,
        d63: this.state.inputs.d63,
      },
    };

    axios.post("http://localhost:5000/user/add", newperson).then((res) => {
      console.log(res.data.status);
      if (res.data.status == "ok") {
        alert("Bracket submitted!");
        window.location = "/";
      } else {
        alert("Username already taken :( Choose another!");
      }
    });
  }

  // This method will get the data from the database.
  componentDidMount() {
    axios
      .get("http://localhost:5000/games/west")
      .then((response) => {
        this.setState({ gamesWest: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get("http://localhost:5000/games/east")
      .then((response) => {
        this.setState({ gamesEast: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("http://localhost:5000/games/south")
      .then((response) => {
        this.setState({ gamesSouth: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    axios
      .get("http://localhost:5000/games/midwest")
      .then((response) => {
        this.setState({ gamesMidwest: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  // This method will map out the games on the table
  gameWest() {
    return this.state.gamesWest.map((currentGame, index) => {
      return <GameEW game={currentGame} key={currentGame._id} />;
    });
  }

  gameWestDropDown() {
    return this.state.gamesWest.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  // This method will map out the games on the table
  gameEast() {
    return this.state.gamesEast.map((currentGame) => {
      return <GameEW game={currentGame} key={currentGame._id} />;
    });
  }

  gameEastDropDown() {
    return this.state.gamesEast.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameSouth() {
    return this.state.gamesSouth.map((currentGame) => {
      return <GameSM game={currentGame} key={currentGame._id} />;
    });
  }

  gameSouthDropDown() {
    return this.state.gamesSouth.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameMidwest() {
    return this.state.gamesMidwest.map((currentGame) => {
      return <GameSM game={currentGame} key={currentGame._id} />;
    });
  }

  gameMidwestDropDown() {
    return this.state.gamesMidwest.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  //////////////////////////////////////////////////////////
  // All of the games, round 1 drop downs
  //////////////////////////////////////////////////////////

  // WEST
  gameOneW() {
    const b = this.state.gamesWest.filter((item) => item.teamA.seed === "1");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameTwoW() {
    const b = this.state.gamesWest.filter((item) => item.teamA.seed === "8");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameThreeW() {
    const b = this.state.gamesWest.filter((item) => item.teamA.seed === "5");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameFourW() {
    const b = this.state.gamesWest.filter((item) => item.teamA.seed === "4");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameFiveW() {
    const b = this.state.gamesWest.filter((item) => item.teamA.seed === "6");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameSixW() {
    const b = this.state.gamesWest.filter((item) => item.teamA.seed === "3");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameSevenW() {
    const b = this.state.gamesWest.filter((item) => item.teamA.seed === "7");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameEightW() {
    const b = this.state.gamesWest.filter((item) => item.teamA.seed === "2");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  // EAST
  gameOneE() {
    const b = this.state.gamesEast.filter((item) => item.teamA.seed === "1");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameTwoE() {
    const b = this.state.gamesEast.filter((item) => item.teamA.seed === "8");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameThreeE() {
    const b = this.state.gamesEast.filter((item) => item.teamA.seed === "5");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameFourE() {
    const b = this.state.gamesEast.filter((item) => item.teamA.seed === "4");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameFiveE() {
    const b = this.state.gamesEast.filter((item) => item.teamA.seed === "6");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameSixE() {
    const b = this.state.gamesEast.filter((item) => item.teamA.seed === "3");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameSevenE() {
    const b = this.state.gamesEast.filter((item) => item.teamA.seed === "7");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameEightE() {
    const b = this.state.gamesEast.filter((item) => item.teamA.seed === "2");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  // SOUTH
  gameOneS() {
    const b = this.state.gamesSouth.filter((item) => item.teamA.seed === "1");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameTwoS() {
    const b = this.state.gamesSouth.filter((item) => item.teamA.seed === "8");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameThreeS() {
    const b = this.state.gamesSouth.filter((item) => item.teamA.seed === "5");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameFourS() {
    const b = this.state.gamesSouth.filter((item) => item.teamA.seed === "4");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameFiveS() {
    const b = this.state.gamesSouth.filter((item) => item.teamA.seed === "6");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameSixS() {
    const b = this.state.gamesSouth.filter((item) => item.teamA.seed === "3");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameSevenS() {
    const b = this.state.gamesSouth.filter((item) => item.teamA.seed === "7");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameEightS() {
    const b = this.state.gamesSouth.filter((item) => item.teamA.seed === "2");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  // MIDWEST
  gameOneMW() {
    const b = this.state.gamesMidwest.filter((item) => item.teamA.seed === "1");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameTwoMW() {
    const b = this.state.gamesMidwest.filter((item) => item.teamA.seed === "8");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameThreeMW() {
    const b = this.state.gamesMidwest.filter((item) => item.teamA.seed === "5");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameFourMW() {
    const b = this.state.gamesMidwest.filter((item) => item.teamA.seed === "4");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameFiveMW() {
    const b = this.state.gamesMidwest.filter((item) => item.teamA.seed === "6");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameSixMW() {
    const b = this.state.gamesMidwest.filter((item) => item.teamA.seed === "3");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameSevenMW() {
    const b = this.state.gamesMidwest.filter((item) => item.teamA.seed === "7");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameEightMW() {
    const b = this.state.gamesMidwest.filter((item) => item.teamA.seed === "2");
    return b.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  getDropDown(op1, op2) {
    return (
      <>
        <option disabled selected value="">
        </option>
        {op1 ? <option>{op1}</option> : null}
        {op2 ? <option>{op2}</option> : null}
      </>
    );
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1 className="bracket-page-title"></h1>
        <div className="bracket-container">
          <div className="bracket-column names">
            <table>
              <thead></thead>
              <tbody className="small-type">{this.gameWest()}</tbody>
              <tbody className="small-type">{this.gameEast()}</tbody>
            </table>
          </div>
          <div className="bracket-column r1">
            <select
              className="pick-dd dd-r1"
              name="d1"
              onChange={this.handleChange}
              required
            >
              {this.gameOneW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d2"
              onChange={this.handleChange}
              required
            >
              {this.gameTwoW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d3"
              onChange={this.handleChange}
              required
            >
              {this.gameThreeW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d4"
              onChange={this.handleChange}
              required
            >
              {this.gameFourW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d5"
              onChange={this.handleChange}
              required
            >
              {this.gameFiveW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d6"
              onChange={this.handleChange}
              required
            >
              {this.gameSixW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d7"
              onChange={this.handleChange}
              required
            >
              {this.gameSevenW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d8"
              onChange={this.handleChange}
              required
            >
              {this.gameEightW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d9"
              onChange={this.handleChange}
              required
            >
              {this.gameOneE()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d10"
              onChange={this.handleChange}
              required
            >
              {this.gameTwoE()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d11"
              onChange={this.handleChange}
              required
            >
              {this.gameThreeE()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d12"
              onChange={this.handleChange}
              required
            >
              {this.gameFourE()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d13"
              onChange={this.handleChange}
              required
            >
              {this.gameFiveE()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d14"
              onChange={this.handleChange}
              required
            >
              {this.gameSixE()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d15"
              onChange={this.handleChange}
              required
            >
              {this.gameSevenE()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d16"
              onChange={this.handleChange}
              required
            >
              {this.gameEightE()}
            </select>
          </div>
          <div className="bracket-column r2">
            <select
              className="pick-dd dd-r2"
              name="d17"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d1, this.state.inputs.d2)}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d18"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d3, this.state.inputs.d4)}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d19"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d5, this.state.inputs.d6)}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d20"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d7, this.state.inputs.d8)}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d21"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d9, this.state.inputs.d10)}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d22"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d11, this.state.inputs.d12)}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d23"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d13, this.state.inputs.d14)}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d24"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d15, this.state.inputs.d16)}
            </select>
          </div>
          <div className="bracket-column r3">
            <select
              className="pick-dd dd-r3"
              name="d25"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d17, this.state.inputs.d18)}
            </select>
            <h2 className="nopadding">WEST</h2>
            <select
              className="pick-dd dd-r3"
              name="d26"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d19, this.state.inputs.d20)}
            </select>
            <h2 className="filler">I</h2>
            <select
              className="pick-dd dd-r3"
              name="d27"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d21, this.state.inputs.d22)}
            </select>
            <h2 className="nopadding">EAST</h2>
            <select
              className="pick-dd dd-r3"
              name="d28"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d23, this.state.inputs.d24)}
            </select>
          </div>
          <div className="bracket-column r4">
            <select
              className="pick-dd dd-r4"
              name="d29"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d25, this.state.inputs.d26)}
            </select>
            <select
              className="pick-dd dd-r4"
              name="d30"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d27, this.state.inputs.d28)}
            </select>
          </div>
          <div className="bracket-column r5">
            <div className="dd-r2">
              <label>East/ West</label>
              <select
                className="pick-dd"
                name="d31"
                onChange={this.handleChange}
                required
              >
                {this.getDropDown(this.state.inputs.d29, this.state.inputs.d30)}
              </select>
            </div>
            <div className="dd-r2">
              <label>
                <b>Champion</b>
              </label>
              <select
                className="pick-dd"
                name="d32"
                onChange={this.handleChange}
                required
              >
                {this.getDropDown(this.state.inputs.d31, this.state.inputs.d33)}
              </select>
            </div>
            <div className="dd-r2">
              <label> Midwest/ South</label>
              <select
                className="pick-dd"
                name="d33"
                onChange={this.handleChange}
                required
              >
                {this.getDropDown(this.state.inputs.d34, this.state.inputs.d35)}
              </select>
            </div>
          </div>
          <div className="bracket-column r4">
            <select
              className="pick-dd dd-r4"
              name="d34"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d36, this.state.inputs.d37)}
            </select>
            <select
              className="pick-dd dd-r4"
              name="d35"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d38, this.state.inputs.d39)}
            </select>
          </div>
          <div className="bracket-column r3">
            <select
              className="pick-dd dd-r3"
              name="d36"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d40, this.state.inputs.d41)}
            </select>
            <h2>SOUTH</h2>
            <select
              className="pick-dd dd-r3"
              name="d37"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d42, this.state.inputs.d43)}
            </select>
            <h2 className="filler">I</h2>
            <select
              className="pick-dd dd-r3"
              name="d38"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d44, this.state.inputs.d45)}
            </select>
            <h2>MIDWEST</h2>
            <select
              className="pick-dd dd-r3"
              name="d39"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d46, this.state.inputs.d47)}
            </select>
          </div>
          <div className="bracket-column r2">
            <select
              className="pick-dd dd-r2"
              name="d40"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d48, this.state.inputs.d49)}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d41"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d50, this.state.inputs.d51)}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d42"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d52, this.state.inputs.d53)}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d43"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d54, this.state.inputs.d55)}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d44"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d56, this.state.inputs.d57)}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d45"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d58, this.state.inputs.d59)}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d46"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d60, this.state.inputs.d61)}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d47"
              onChange={this.handleChange}
              required
            >
              {this.getDropDown(this.state.inputs.d62, this.state.inputs.d63)}
            </select>
          </div>
          <div className="bracket-column r1">
            <select
              className="pick-dd dd-r1"
              name="d48"
              onChange={this.handleChange}
              required
            >
              {this.gameOneS()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d49"
              onChange={this.handleChange}
              required
            >
              {this.gameTwoS()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d50"
              onChange={this.handleChange}
              required
            >
              {this.gameThreeS()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d51"
              onChange={this.handleChange}
              required
            >
              {this.gameFourS()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d52"
              onChange={this.handleChange}
              required
            >
              {this.gameFiveS()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d53"
              onChange={this.handleChange}
              required
            >
              {this.gameSixS()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d54"
              onChange={this.handleChange}
              required
            >
              {this.gameSevenS()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d55"
              onChange={this.handleChange}
              required
            >
              {this.gameEightS()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d56"
              onChange={this.handleChange}
              required
            >
              {this.gameOneMW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d57"
              onChange={this.handleChange}
              required
            >
              {this.gameTwoMW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d58"
              onChange={this.handleChange}
              required
            >
              {this.gameThreeMW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d59"
              onChange={this.handleChange}
              required
            >
              {this.gameFourMW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d60"
              onChange={this.handleChange}
              required
            >
              {this.gameFiveMW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d61"
              onChange={this.handleChange}
              required
            >
              {this.gameSixMW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d62"
              onChange={this.handleChange}
              required
            >
              {this.gameSevenMW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d63"
              onChange={this.handleChange}
              required
            >
              {this.gameEightMW()}
            </select>
          </div>
          <div className="bracket-column names">
            <table>
              <thead></thead>
              <tbody className="small-type">{this.gameSouth()}</tbody>
              <tbody className="small-type">{this.gameMidwest()}</tbody>
            </table>
          </div>
        </div>
        <div className="bracket-input">
          <label>
            <b>Name/ nickname for bracket:</b>
          </label>
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            value={this.state.name}
            placeholder="Bob White"
            onChange={this.onChangeName}
            required
          ></input>
          <br></br>
          <div className="form-group">
            <input
              type="submit"
              value="Submit!"
              className="w-100 btn btn-lg btn-primary"
            />
          </div>
          <br></br>
          <br></br>
        </div>
      </form>
    );
  }
}
