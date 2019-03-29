import React, { Component } from 'react';
import { Link, Route } from "react-router-dom"
import {Button, Nav, Navbar, NavbarBrand, NavItem,} from "reactstrap";


class NavbarInside extends Component {
    render() {
        return (
            <div>
               <Navbar color="light" light expand="md">
               <Button  tag={Link} to="/login">Home</Button>
               
                <NavbarBrand href="/">TRELLO</NavbarBrand>
                <Nav className="ml-auto" navbar>
                <NavItem  tag={Route} >  
                <Button>Create Card</Button>
                </NavItem>&nbsp;
                <NavItem>  
                <Button tag={Link} to="/signup"  >SignUp</Button>
                </NavItem>
              </Nav>
              </Navbar>
            </div>
        );
    }
}

export default NavbarInside;