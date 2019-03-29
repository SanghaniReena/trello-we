import './App.css';

import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import NavbarInside from "../src/view/NavbarInside"
import Boards from "./view/Boards"
import UserLogin from './view/UserLogin';
import UserRegistration from './view/UserRegistration';


class App extends Component {

  render() {
    return (
      <Router>
            <Switch>
              <Route exact path='/' component={UserLogin} />
              <Route path='/login' component={UserLogin} component={NavbarInsides}/>
              <Route path='/signup' component={UserRegistration} /> 
              <Route path='/boards' component={Boards} /> 
          </Switch>
        </Router>
      
    );
  }
}

export default App;
