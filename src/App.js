import React from "react";
import './App.css';

// We use Route in order to define the different routes of our application
import { Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import Leaderboard from "./components/leaderboard";
import Login from "./components/login";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/">
        <Leaderboard />
      </Route>
      <Route path="/edit/:id" component={Edit} />
      <Route path="/create">
        <Create />
      </Route>
      <main className="form-signin">
        <Login />
      </main>
    </div>
  );
};

export default App;
