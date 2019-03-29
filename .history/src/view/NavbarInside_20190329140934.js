import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown } from 'reactstrap';
import { Button, Form, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { bindActionCreators } from "redux";
import * as boardAction from "../action/BoardsAction"
import * as userAction from "../action/UserRegAction"


// import {browserHistory} from "react-router"








// import { Link } from "react-router-dom"


class NavbarInside extends Component {
  
  componentDidUpdate(){
    this.handleLogout()
  }
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this)
    this.state = {
      isOpen: false,
      isOpenM: false,
      bTitle: "",
      boards: []
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
  handleOnChange = (key, e) => {
    this.setState({
      bTitle: e.target.value
    })
  }
  
  handleLogout=()=>{
   debugger
  this.props.history.push("/login")
 
  }
  
  handleCreateBoardEvent = () => {
    this.toggleModal();
    const bTitle = {
      bTitle: this.state.bTitle
    }
    this.props.action.boardAction.AddBoard(bTitle)

  }
  render() {
    debugger
   const uname= localStorage.getItem('userName')
   console.log("uname : ",uname)

    return (
      <div>
        <Modal isOpen={this.state.isOpenM} toggle={this.toggleModal}>
          <ModalBody>
            <ModalHeader toggle={this.toggleModal}>Create board</ModalHeader>
            <Form>
              <FormGroup>
                <Input type="text" name="bTitle" id="bTitle" placeholder="Add Board Title" onChange={(e) => this.handleOnChange("bTitle", e)} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleCreateBoardEvent.bind(this)}>Create</Button>{' '}
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>

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
             
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                {uname}
                  </DropdownToggle>
                <DropdownMenu right>
                <DropdownItem onClick={this.handleLogout.bind(this)}>
                   Logout
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
const mapStateToProps = (state) => {
  return {
    boardData: state.boards
  }
}
const mapDispatchToProps = (dispatch) => ({
  action: {
    boardAction: bindActionCreators(boardAction, dispatch),
    userAction:bindActionCreators(userAction,dispatch)
  }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarInside));