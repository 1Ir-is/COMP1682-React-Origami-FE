import React from "react";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import { BrowserRouter as Router } from "react-router-dom/cjs/react-router-dom.min";
import "./App.css";
import Navbar from "./layout/Navbar";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/user/login">
              <Login />
            </Route>
            <Route exact path="/user/register">
              <Register />
            </Route>
            <Route exact path="/origami/create">
              <CreatePost />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;