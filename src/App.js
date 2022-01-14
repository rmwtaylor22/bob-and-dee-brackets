import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import Leaderboard from "./components/leaderboard";
import Bracket from "./components/bracket";
import Test from "./components/test";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Route path="/" exact component={Leaderboard} />
          <Route path="/bracket" component={Bracket} />
          <Route path="/create" component={Create} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="/test" component={Test} />
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
