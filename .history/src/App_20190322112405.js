import './App.css';

import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/signup" componet={UserRegistration}>

        </Switch>
      </div>
    );
  }
}

export default App;
