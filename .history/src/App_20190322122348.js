import './App.css';

import React, { Component } from 'react';
import {Router, Switch} from "react-router-dom";
import UserLogin from "./view/UserLogin"
import UserRegistration from "./view/UserRegistration"


class App extends Component {
  render() {
    return (

        <Switch>
          <Router exact path="/signup" componet={UserRegistration}/>
          <Router exact path="/login" componet={UserLogin}/>
        </Switch>
      
    );
  }
}

export default App;
