import React, { Component } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';


//import { Button } from 'reactstrap';



//import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';



// import {Button, Nav, Navbar, NavbarBrand, NavItem,} from "reactstrap";
// import { Link, Route } from "react-router-dom"

class NavbarInside extends Component {
   
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
    render() {

        return (
            <div>  
             <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
       <DropdownToggle caret>
          Create
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Create Board</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
          
            
                
            </div>
        );
    }
}

export default NavbarInside;