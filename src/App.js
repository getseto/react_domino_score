import React from "react";
import NavBar from "./Components/NavBar";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./Components/Profile";
import history from "./Utils/history";
import PrivateRoute from "./Components/PrivateRoute";
import ExternalApi from "./Views/ExternalApi";
import Home from "./Components/Home";
import NewGame from "./Components/NewGame"
import 'typeface-roboto'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/home" component={Home}/>
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
          <PrivateRoute path="/newgame" component={NewGame} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
