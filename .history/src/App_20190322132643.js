import './App.css';

import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import {


Collapse,
Nav,
Navbar,
NavbarBrand,
NavbarToggler,
NavItem,
NavLink
} from "reactstrap";

// import UserLogin from "./view/UserLogin"
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
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
      
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/login" >Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">Signup</NavLink>
              </NavItem>
            </Nav>
         
        </Navbar>
    );
  }
}

export default App;
