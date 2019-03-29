import './App.css';

import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import {Button, Nav, Navbar, NavbarBrand, NavItem,} from "reactstrap";
import Boards from "./view/Boards"
import UserLogin from './view/UserLogin';
import UserRegistration from './view/UserRegistration';


class App extends Component {

  render() {
    
    return (
      <Router>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">TRELLO</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem  tag={Route} >  
              <Button tag={Link} to="/login">LogIn</Button>
              </NavItem>&nbsp;
              <NavItem>  
              <Button tag={Link} to="/signup"  >SignUp</Button>
              </NavItem>
            </Nav>
            </Navbar>
            
            <Switch>
              <Route exact path='/' component={UserLogin} />
              <Route path='/login' component={UserLogin} />
              <Route path='/signup' component={UserRegistration} />
              <Route path='/boards' component={Boards} />
          </Switch>
        </Router>
      
    );
  }
}

export default App;
