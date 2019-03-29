import React, { Component } from 'react';
import {Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, UncontrolledDropdown} from 'reactstrap';


class NavbarInside extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleM = this.toggleM.bind(this);

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
  toggleM() {
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
          <Button color="danger" onClick={this.toggleM}></Button>
        <Modal isOpenM={this.state.modalM} toggleM={this.toggleM} className={this.props.className}>
          <ModalHeader toggleM={this.toggleM}>Modal title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleM}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggleM}>Cancel</Button>
          </ModalFooter>
        </Modal>
        </div>
        );
    }
}

export default NavbarInside;