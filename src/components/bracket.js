import React, { Component } from "react";
import axios from "axios";
import "../App.css";

const Game = (props) => (
  <tr>
    <br></br>
    <tr>
      <td>{props.game.teamA.seed}</td>
      <td>{props.game.teamA.name}</td>
    </tr>
    <tr>
      <td>{props.game.teamB.seed}</td>
      <td>{props.game.teamB.name}</td>
    </tr>
    <br></br>
  </tr>
);

const GameDropDown = (props) => (
      <><option disabled selected value>
    - select -
  </option><option value={props.game.teamA.name}>{props.game.teamA.name}</option><option value={props.game.teamB.name}>{props.game.teamB.name}</option></>
);

export default class Bracket extends Component {
  // This is the constructor that shall store our data retrieved from the database
  constructor(props) {
    super(props);
    this.state = {
      gamesWest: [],
      gamesEast: [],
      gamesSouth: [],
      gamesMidwest: [],
      funStuff: ["hello", "second choice", "third choce"],
      gamesWest1: [],
      inputs: {
        d1: "",
        d2: "",
        d3: "",
        d4: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
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
    /*     axios
      .get("http://localhost:5000/games/west/1")
      .then((response) => {
        this.setState({ gamesWest1: response.data });
      })
      .catch(function (error) {
        console.log(error);
      }); */
  }

  // This method will map out the games on the table
  gameWest() {
    return this.state.gamesWest.map((currentGame) => {
      return <Game game={currentGame} key={currentGame._id} />;
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
      return <Game game={currentGame} key={currentGame._id} />;
    });
  }

  gameEastDropDown() {
    return this.state.gamesEast.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameSouth() {
    return this.state.gamesSouth.map((currentGame) => {
      return <Game game={currentGame} key={currentGame._id} />;
    });
  }

  gameSouthDropDown() {
    return this.state.gamesSouth.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  gameMidwest() {
    return this.state.gamesMidwest.map((currentGame) => {
      return <Game game={currentGame} key={currentGame._id} />;
    });
  }

  gameMidwestDropDown() {
    return this.state.gamesMidwest.map((currentGame) => {
      return <GameDropDown game={currentGame} key={currentGame._id} />;
    });
  }

  render() {
    const selectedPlanets = Object.values(this.state.inputs);

    //    const d1Options = this.state.gamesWest.filter((item, index) => index === 0);
    const d1Options = this.state.funStuff;
    const d2Options = this.state.funStuff;
    const d3Options = [this.state.inputs.d1, this.state.inputs.d2];
    return (
      <div>
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
            <div>
              <select className="pick-dd dd-r1" name="d1" value={this.state.inputs.d1}
              onChange={this.handleChange}>
              {this.gameWestDropDown()}
              </select>
            </div>
            
            {this.gameEastDropDown()}
          </div>
          <div className="bracket-column r2">
            <select
              className="pick-dd dd-r2"
              name="d"
              value={this.state.inputs.d1}
              onChange={this.handleChange}
            >
              <option></option>
              {d1Options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d2"
              value={this.state.inputs.d2}
              onChange={this.handleChange}
            >
              <option></option>
              {d2Options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d3"
              value={this.state.inputs.d3}
              onChange={this.handleChange}
            >
              <option></option>
              {d3Options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <select className="pick-dd dd-r2"></select>
            <select className="pick-dd dd-r2"></select>
            <select className="pick-dd dd-r2"></select>
            <select className="pick-dd dd-r2"></select>
            <select className="pick-dd dd-r2"></select>
          </div>
          <div className="bracket-column r3">
            <select className="pick-dd dd-r3"></select>
            <h2 className="nopadding">WEST</h2>
            <select className="pick-dd dd-r3"></select>
            <h2 className="filler">I</h2>
            <select className="pick-dd dd-r3"></select>
            <h2 className="nopadding">EAST</h2>
            <select className="pick-dd dd-r3"></select>
          </div>
          <div className="bracket-column r4">
            <select className="pick-dd dd-r4"></select>
            <select className="pick-dd dd-r4"></select>
          </div>
          <div className="bracket-column r5">
            <div className="dd-r2">
              <label>East/ West</label>
              <select className="pick-dd"></select>
            </div>
            <div className="dd-r2">
              <label>
                <b>Champion</b>
              </label>
              <select className="pick-dd"></select>
            </div>
            <div className="dd-r2">
              <label> Midwest/ South</label>
              <select className="pick-dd"></select>
            </div>
          </div>
          <div className="bracket-column r4">
            <select className="pick-dd dd-r4"></select>
            <select className="pick-dd dd-r4"></select>
          </div>
          <div className="bracket-column r3">
            <select className="pick-dd dd-r3"></select>
            <h2>SOUTH</h2>
            <select className="pick-dd dd-r3"></select>
            <h2 className="filler">I</h2>
            <select className="pick-dd dd-r3"></select>
            <h2>MIDWEST</h2>
            <select className="pick-dd dd-r3"></select>
          </div>
          <div className="bracket-column r2">
            <select className="pick-dd dd-r2"></select>
            <select className="pick-dd dd-r2"></select>
            <select className="pick-dd dd-r2"></select>
            <select className="pick-dd dd-r2"></select>
            <select className="pick-dd dd-r2"></select>
            <select className="pick-dd dd-r2"></select>
            <select className="pick-dd dd-r2"></select>
            <select className="pick-dd dd-r2"></select>
          </div>
          <div className="bracket-column r1">
            {this.gameSouthDropDown()}
            {this.gameMidwestDropDown()}
          </div>
          <div className="bracket-column names">
            <table>
              <thead></thead>
              <tbody className="small-type">{this.gameSouth()}</tbody>
              <tbody className="small-type">{this.gameMidwest()}</tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
