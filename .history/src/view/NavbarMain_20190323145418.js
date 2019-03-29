import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import {Button, Nav, Navbar, NavbarBrand, NavItem,} from "reactstrap";


class NavbarMain extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md">
            <NavbarBrand href="/">TRELLO</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem  tag={Route} >  
                <Button  tag={Link} to="/login">LogIn</Button>
                </NavItem>&nbsp;
                <NavItem>  
                <Button tag={Link} to="/signup"  >SignUp</Button>
                </NavItem>
              </Nav>
              </Navbar>
              
        );
    }
}

export default NavbarMain;