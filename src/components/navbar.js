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
    <div>
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <NavLink className="navbar-brand" to="/">
          <span class="larger">Bob & D</span>
          <br></br>
          <span class="nav-tilt">brackets</span>
        </NavLink>
        <div>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/create">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/bracket">
                Bracket
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/letsTest">
                Test
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
