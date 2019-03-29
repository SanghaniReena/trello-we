import React, { Component } from 'react';
import {Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown} from 'reactstrap';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


class NavbarInside extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleModal=this.toggleModal.bind(this)
    this.state = {
      isOpen: false,
      isOpenM:false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  toggleModal() {
    this.setState({
      isOpenM: !this.state.isOpenM
    });
  }
  handleCreateBoardEvent=()=>{
    
  }
  
    render() {

        return (
          <div>
       
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Trello</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Create
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem onClick={this.toggleModal}>
                      Create Board
                    </DropdownItem>
                    <DropdownItem>
                      Create Team
                   </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          
        </div>
        );
    }
}

export default NavbarInside;