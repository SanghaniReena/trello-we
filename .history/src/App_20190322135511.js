import './App.css';

import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import {
Button,
Nav,
Navbar,
NavbarBrand,
NavItem,
NavLink
} from "reactstrap";
import UserLogin from './view/UserLogin';
import UserRegistration from './view/UserRegistration';


//import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
//import UserLogin from "./view/UserLogin";
// import UserRegistration from "./view/UserRegistration"


class App extends Component {

  render() {
    debugger
    return (
        // <Router>
        //   <Switch>
        //     <Route  path="/signup" componet={UserRegistration}/>
        //     <Route exact path="/login" componet={UserLogin}/>
        //   </Switch>
        // </Router>
        <Router>
        <Navbar color="light" light expand="md">
            
          <NavbarBrand href="/">reactstrap</NavbarBrand>
            <Switch>
            <Nav className="ml-auto" navbar>
              <NavItem  tag={Route}component={UserLogin}>  
              <Button tag={Link} to="/login" >LogIn</Button>
              </NavItem>&nbsp;
              <NavItem>  
              <Button tag={Link} to="/signup" Component={UserRegistration} >SignUp</Button>
              </NavItem>
            </Nav>
            </Switch>
        </Navbar>
        </Router>
    );
  }
}

export default App;
