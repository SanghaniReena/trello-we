import React, { Component } from 'react';
import {Collapse, DropdownItem, DropdownMenu, Nav, Navbar, NavbarBrand, NavbarToggler,DropdownToggle} from 'reactstrap';


//import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

// import {Button, Nav, Navbar, NavbarBrand, NavItem,} from "reactstrap";
// import { Link, Route } from "react-router-dom"

class NavbarInside extends Component {
   
  cconstructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    render() {

        return (
            <div>  
            <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
  
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
            </Nav>
          </Collapse>
        </Navbar>
            
                
            </div>
        );
    }
}

export default NavbarInside;