import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import Edit from "./components/edit";
import Create from "./components/create";
import Leaderboard from "./components/leaderboard";
import Login from "./components/login";
import Register from "./components/register";
import edit from "./components/edit";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <main>
          <Route path="/" exact component={Leaderboard} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/edit/:id" component={Edit} />
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
