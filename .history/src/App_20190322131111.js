import './App.css';

import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserLogin from "./view/UserLogin"
import UserRegistration from "./view/UserRegistration"


class App extends Component {

  render() {
    debugger
    return (
        <Router>
          <Switch>
            <Route  path="/signup" componet={UserRegistration}/>
            <Route exact path="/login" componet={UserLogin}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
