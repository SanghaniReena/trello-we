import React, { Component } from 'react';
import {Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown} from 'reactstrap';


class NavbarInside extends Component {
  constructor(props) {
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
            <NavbarBrand href="/">Trello</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Create
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem onClick={this.handleCreateBoardEvent.bind(this)}>
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