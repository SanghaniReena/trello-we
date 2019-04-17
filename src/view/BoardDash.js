import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Card, CardTitle } from 'reactstrap';
import * as boardAction from "../action/BoardsAction"
import * as listAction from "../action/ListsAction"
import * as teamAction from "../action/TeamsAction"
import Navbd from './Navbd';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Popover, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, UncontrolledDropdown } from 'reactstrap';
import "./Boards.css"
import "./Lists.css"
import Lists from './Lists';

class BoardDash extends Component {

  componentWillMount() {
    debugger
    const { history } = this.props;
    const iduser = localStorage.getItem("iduser")
    this.props.action.boardAction.FetchBoard(iduser, history)
    const id = this.props.location.pathname.slice(7);
    this.props.action.listAction.FetchList(id)
  }
  constructor(props) {
    super(props);
    this.togglep = this.togglep.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleModal = this.toggleModal.bind(this)
    this.toggleTModal = this.toggleTModal.bind(this)
    this.state = {
      isOpen: false,
      isOpenM: false,
      isOpenTM: false,
      bTitle: "",
      popoverOpen: false,
      lName: "",
      iduser: "",
      boards: [],
      tName: "",
      tDesc: "",
      idteams: 0,
      teams: [],
      auth: true,
    };
  }
  togglep() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  }

  handleAddClick = (idboards) => {
    debugger
    const idusers = localStorage.getItem("iduser")
    const listData = {
      lName: this.state.lName,
      iduser: idusers,
      idboards: idboards,
      idteams: 0
    }
    this.props.action.listAction.AddList(listData)
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
  toggleTModal() {
    this.setState({
      isOpenTM: !this.state.isOpenTM
    });
  }
  handleOnChange = (key, e) => {
    this.setState({
      [key]: e.target.value
    })
  }
  handleOnChangelist = (key, e) => {
    this.setState({
      [key]: e.target.value
    })
    console.log(this.state.lName)
  }
  render() {

    const id = this.props.location.pathname.slice(7);
    let data = "";
    if (this.props.boardData && this.props.boardData.length > 0) {
      data = this.props.boardData.filter((board) => {
        return board.idboards === parseInt(id, 10);
      })
    }
    let teamSelect = this.props.teamData.map((teamData, key) => {
      return (
        <option key={key} value={teamData.idteams}>{teamData.tName}
        </option>
      )
    })
    let listData = this.props.listData.map((listData, key) => {
      return (
        <div className="col-sm-4" style={{ padding: "7px", width: "100%", marginLeft: "1%", WebkitFlex: "0 0 33.333333%", maxWidth: "23.333333%" }} key={key}>
          <Card className="card1" body outline color="secondary" style={{ width: "90%", backgroundColor: "#dfe3e6", border: "none", borderRadius: " 6%" }} >
            <CardTitle style={{ fontWeight: " bolder", fontSize: "larger" }}>{listData.lName}</CardTitle>
            <div className="Addcard">+ <a href="" style={{ color: "#6b808c" }} >Add a card </a></div>
          </Card>
        </div>
      )
    })
    return (
      <div>
        <Navbd></Navbd>
        <Navbar expand="md" style={{ backgroundColor: "#3487B8", fontWeight: "bold" }}>
          <Nav navbar>
            <div className="boardnav">{(data) ? data[0].bTitle : null}</div>
            <div style={{ borderLeft: "inset", marginLeft: "1%" }} ></div>

            <UncontrolledDropdown nav inNavbar  >
              <DropdownToggle nav style={{ alignSelf: "center", fontWeight: "bold", color: "white", background: "#3487B8", padding: "2%", margin: "1%", marginLeft: "4%", border: "None" }}>
                <center> <div className="boardnav" style={{ marginTop: "5%", padding: "2%" }}>Personal</div></center></DropdownToggle>
              <DropdownMenu style={{ width: "max-content" }}>
                <DropdownItem style={{ textAlign: "center" }} header>Add to a team</DropdownItem>
                <DropdownItem divider />
                <Form style={{ width: "max-content", padding: "5%" }} >
                  <FormGroup>
                    <Label for="teamselect">This board is a part of..</Label>
                    <Input type="select" name="idteams" id="idteams" onChange={(e) => this.handleOnChange("idteams", e)} >
                      <option defaultValue="0">Personal boards (No team)</option>
                      {teamSelect}
                    </Input>
                  </FormGroup>
                </Form>
                <div style={{ paddingLeft: "5%" }} >
                  <Button color="primary" >Add</Button>
                  <a style={{ marginLeft: "35%", float: "center", textAlign: "center" }} href="/boards">Create Team</a></div>
              </DropdownMenu>
            </UncontrolledDropdown >
            <div style={{ borderLeft: "inset", marginLeft: "6%" }} ></div>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav style={{ alignSelf: "center", fontWeight: "bold", color: "white", background: "#3487B8", padding: "2%", margin: "1%", marginLeft: "4%", border: "None" }}>
                <center><div className="boardnav" style={{ marginTop: "5%", padding: "2%" }}>Private</div></center></DropdownToggle>
              <DropdownMenu>
                <DropdownItem style={{ textAlign: "center" }} header>Create</DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={this.toggleModal}>
                  Create Board
                    </DropdownItem>
                <DropdownItem onClick={this.toggleTModal}>
                  Create Team
                   </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
        <div className="listdiv"  >
          <div className="row" >
            {listData}
            <button id="Popover1" className="buttonlist" >+ Add a list</button>
            <Popover style={{ size: "fixed" }} placement="bottom" isOpen={this.state.isOpen} target="Popover1" toggle={this.togglep}>
              <form className="listForm">
                <input max="25" className="inputForm" type="text" name="lName" id="lName" placeholder="Add list Title" onChange={(e) => this.handleOnChangelist("lName", e)} />
                <button className="but" onClick={this.handleAddClick.bind(this, id)}>Add List</button>
              </form>
            </Popover>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    boardData: state.BoardReducer.boards,
    teamData: state.TeamReducer.teams,
    listData: state.ListsReducer.lists,

  }
}
const mapDispatchToProps = (dispatch) => ({
  action: {
    boardAction: bindActionCreators(boardAction, dispatch),
    teamAction: bindActionCreators(teamAction, dispatch),
    listAction: bindActionCreators(listAction, dispatch)

  }
})
export default connect(mapStateToProps, mapDispatchToProps)(BoardDash)