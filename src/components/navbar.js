import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
import "../App.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

// Here, we display our Navbar
const Navbar = () => {

  return (
    <nav class="navbar navbar-expand navbar-dark bg-dark sticky-top">
      <img src={require("./ball.png")} width={"80px"} alt='ball'></img>
      <NavLink className="navbar-brand" to="/">
        <span class="larger">Bob & D</span>
        <br></br>
        <span class="nav-tilt">brackets</span>
      </NavLink>
      <div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item pd-sm">
            <Link className="nav-link" to="/">
              Leaderboard
            </Link>
          </li>
          <li className="nav-item pd-sm">
            <Link className="nav-link" to="/bracket">
              Bracket
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
