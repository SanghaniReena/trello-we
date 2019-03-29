import './App.css';

import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";


class App extends Component {
  render() {
    return (

        <Switch>
          <Route exact path="/signup" componet={UserRegistration}/>
          <Route exact path="/login" componet={UserLogin}/>
        </Switch>
      
    );
  }
}

export default App;
