import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarBrand, NavbarToggler, UncontrolledDropdown } from 'reactstrap';
import { Button, Form, FormGroup, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { bindActionCreators } from "redux";
import * as boardAction from "../action/BoardsAction"
import * as userAction from "../action/UserRegAction"


class NavbarInside extends Component {

  // componentWillUpdate() {
  //   debugger
  //   this.handleLogout()
  // }
  componentWillUpdate(){
    this.handleLogoutDir()
  }
  componentWillUpdate(){
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
      boards: [],
      uname:""
    };
    // this.handleLogout=this.handleLogout.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleLogoutDir(){
    if(this.state.uname===""){
        this.props.history.push("/login")
    }
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

  handleLogout = () => {
    this.setState({
      uname:""
      
    })
    // this.props.history.push("/login")
    this.props.action.userAction.logoutAction()

  }

  handleCreateBoardEvent = () => {
    this.toggleModal();
    const bTitle = {
      bTitle: this.state.bTitle
    }
    this.props.action.boardAction.AddBoard(bTitle)

  }
  render() {
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
                  {localStorage.getItem('userName')}
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem onClick={this.handleLogout}>
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
    boardData: state.boards,
    userAuth:state.UserRegReducer.auth
  }
}
const mapDispatchToProps = (dispatch) => ({
  action: {
    boardAction: bindActionCreators(boardAction, dispatch),
    userAction: bindActionCreators(userAction, dispatch)
  }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarInside));