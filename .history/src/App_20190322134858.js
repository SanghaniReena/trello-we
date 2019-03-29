import './App.css';

import React, { Component } from 'react';
import {BrowserRouter as Router, Link} from "react-router-dom"
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
      
            <Nav className="ml-auto" navbar>
              <NavItem>  
              <Button tag={Link} to="/login" Component={UserLogin}>LogIn</Button>
              </NavItem>&nbsp;
              <NavItem>  
              <Button tag={Link} to="/Signup" Component={UserRegistration} >SignUp</Button>
              </NavItem>
            </Nav>
         
        </Navbar>
        </Router>
    );
  }
}

export default App;
