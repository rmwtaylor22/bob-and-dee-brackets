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
  <>
    <option disabled selected value>
      - select -
    </option>
    <option value={props.game.teamA.name}>{props.game.teamA.name}</option>
    <option value={props.game.teamB.name}>{props.game.teamB.name}</option>
  </>
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
      inputs: {
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
        d17: "",
        d18: "",
        d19: "",
        d20: "",
        d21: "",
        d22: "",
        d23: "",
        d24: "",
        d25: "",
        d26: "",
        d27: "",
        d28: "",
        d29: "",
        d30: "",
        d31: "",
        d32: "",
        d33: "",
        d34: "",
        d35: "",
        d36: "",
        d37: "",
        d38: "",
        d39: "",
        d40: "",
        d41: "",
        d42: "",
        d43: "",
        d44: "",
        d45: "",
        d46: "",
        d47: "",
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
        d64: "",
        d65: "",
        d66: "",
        d67: "",
        d68: "",
        d69: "",
        d70: "",
        d71: "",
        d72: "",
        d73: "",
        d74: "",
        d75: "",
        d76: "",
        d77: "",
        d78: "",
        d79: "",
        d80: "",
        d81: "",
        d82: "",
        d83: "",
        d84: "",
        d85: "",
        d86: "",
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
  }

  // This method will map out the games on the table
  gameWest() {
    return this.state.gamesWest.map((currentGame, index) => {
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

  render() {
    //row 2
    const d17Options = [this.state.inputs.d1, this.state.inputs.d2];
    const d18Options = [this.state.inputs.d3, this.state.inputs.d4];
    const d19Options = [this.state.inputs.d5, this.state.inputs.d6];
    const d20Options = [this.state.inputs.d7, this.state.inputs.d8];
    const d21Options = [this.state.inputs.d9, this.state.inputs.d10];
    const d22Options = [this.state.inputs.d11, this.state.inputs.d12];
    const d23Options = [this.state.inputs.d13, this.state.inputs.d14];
    const d24Options = [this.state.inputs.d15, this.state.inputs.d16];
    // row 3
    const d25Options = [this.state.inputs.d17, this.state.inputs.d18];
    const d26Options = [this.state.inputs.d19, this.state.inputs.d20];
    const d27Options = [this.state.inputs.d21, this.state.inputs.d22];
    const d28Options = [this.state.inputs.d23, this.state.inputs.d24];
    // row 4
    const d29Options = [this.state.inputs.d25, this.state.inputs.d26];
    const d30Options = [this.state.inputs.d27, this.state.inputs.d28];
    // row 5
    const d31Options = [this.state.inputs.d29, this.state.inputs.d30];

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
            <select
              className="pick-dd dd-r1"
              name="d1"
              value={this.state.inputs.d1}
              onChange={this.handleChange}
            >
              {this.gameOneW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d2"
              value={this.state.inputs.d2}
              onChange={this.handleChange}
            >
              {this.gameTwoW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d3"
              value={this.state.inputs.d3}
              onChange={this.handleChange}
            >
              {this.gameThreeW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d4"
              value={this.state.inputs.d4}
              onChange={this.handleChange}
            >
              {this.gameFourW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d5"
              value={this.state.inputs.d5}
              onChange={this.handleChange}
            >
              {this.gameFiveW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d6"
              value={this.state.inputs.d6}
              onChange={this.handleChange}
            >
              {this.gameSixW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d7"
              value={this.state.inputs.d7}
              onChange={this.handleChange}
            >
              {this.gameSevenW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d8"
              value={this.state.inputs.d8}
              onChange={this.handleChange}
            >
              {this.gameEightW()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d9"
              value={this.state.inputs.d9}
              onChange={this.handleChange}
            >
              {this.gameOneE()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d10"
              value={this.state.inputs.d10}
              onChange={this.handleChange}
            >
              {this.gameTwoE()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d11"
              value={this.state.inputs.d11}
              onChange={this.handleChange}
            >
              {this.gameThreeE()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d12"
              value={this.state.inputs.d12}
              onChange={this.handleChange}
            >
              {this.gameFourE()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d13"
              value={this.state.inputs.d13}
              onChange={this.handleChange}
            >
              {this.gameFiveE()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d14"
              value={this.state.inputs.d14}
              onChange={this.handleChange}
            >
              {this.gameSixE()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d15"
              value={this.state.inputs.d15}
              onChange={this.handleChange}
            >
              {this.gameSevenE()}
            </select>
            <select
              className="pick-dd dd-r1"
              name="d16"
              value={this.state.inputs.d16}
              onChange={this.handleChange}
            >
              {this.gameEightE()}
            </select>
          </div>
          <div className="bracket-column r2">
            <select
              className="pick-dd dd-r2"
              name="d17"
              value={this.state.inputs.d17}
              onChange={this.handleChange}
            >
              {d17Options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d18"
              value={this.state.inputs.d18}
              onChange={this.handleChange}
            >
              {d18Options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d19"
              value={this.state.inputs.d19}
              onChange={this.handleChange}
            >
              {d19Options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d20"
              value={this.state.inputs.d20}
              onChange={this.handleChange}
            >
              {d20Options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d21"
              value={this.state.inputs.d21}
              onChange={this.handleChange}
            >
              {d21Options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d22"
              value={this.state.inputs.d22}
              onChange={this.handleChange}
            >
              {d22Options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d23"
              value={this.state.inputs.d23}
              onChange={this.handleChange}
            >
              {d23Options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <select
              className="pick-dd dd-r2"
              name="d24"
              value={this.state.inputs.d24}
              onChange={this.handleChange}
            >
              {d24Options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="bracket-column r3">
          <select
              className="pick-dd dd-r3"
              name="d25"
              value={this.state.inputs.d25}
              onChange={this.handleChange}
            >
              {d25Options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <h2 className="nopadding">WEST</h2>
            <select
              className="pick-dd dd-r3"
              name="d26"
              value={this.state.inputs.d26}
              onChange={this.handleChange}
            >
              {d26Options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <h2 className="filler">I</h2>
            <select
              className="pick-dd dd-r3"
              name="d27"
              value={this.state.inputs.d27}
              onChange={this.handleChange}
            >
              {d27Options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <h2 className="nopadding">EAST</h2>
            <select
              className="pick-dd dd-r3"
              name="d28"
              value={this.state.inputs.d28}
              onChange={this.handleChange}
            >
              {d28Options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="bracket-column r4">
          <select
              className="pick-dd dd-r4"
              name="d29"
              value={this.state.inputs.d29}
              onChange={this.handleChange}
            >
              {d29Options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <select
              className="pick-dd dd-r4"
              name="d30"
              value={this.state.inputs.d30}
              onChange={this.handleChange}
            >
              {d30Options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
          </div>
          <div className="bracket-column r5">
            <div className="dd-r2">
              <label>East/ West</label>
              <select
              className="pick-dd"
              name="d31"
              value={this.state.inputs.d31}
              onChange={this.handleChange}
            >
              {d31Options.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
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
