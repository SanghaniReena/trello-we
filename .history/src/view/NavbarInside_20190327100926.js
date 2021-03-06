import React, { Component } from 'react';
import { Button, PopoverBody, PopoverHeader, UncontrolledPopover } from 'reactstrap';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


// import {Button, Nav, Navbar, NavbarBrand, NavItem,} from "reactstrap";
// import { Link, Route } from "react-router-dom"

class NavbarInside extends Component {
   
    render() {

        return (
            <div>  
             <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
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