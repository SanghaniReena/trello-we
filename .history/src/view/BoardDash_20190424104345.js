import "./Boards.css"
import "./Lists.css"

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardTitle, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, Popover, UncontrolledDropdown } from 'reactstrap';
import { bindActionCreators } from "redux";
import * as boardAction from "../action/BoardsAction"
import * as cardAction from "../action/CardsAction"
import * as listAction from "../action/ListsAction"
import * as teamboardAction from "../action/TeamBoardsAction";
import * as teamAction from "../action/TeamsAction"
import Navbd from './Navbd';


class BoardDash extends Component {
  componentWillUpdate() {
    const idboards = this.props.location.pathname.slice(7);
    this.props.action.cardAction.FetchCard(idboards);

  }
  componentWillMount() {
    const { history } = this.props;
    const iduser = localStorage.getItem("iduser")
    this.props.action.teamAction.FetchTeam(iduser)

    this.props.action.boardAction.FetchBoard(iduser, history)
    const idboards = this.props.location.pathname.slice(7);
    this.props.action.listAction.FetchList(idboards)
    this.props.action.teamboardAction.FetchiBoard(iduser, idboards)
    // this.props.action.teamAction.FetchTeam(iduser, idboards)

  }
  constructor(props) {
    super(props);
    this.togglep = this.togglep.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleD = this.toggleD.bind(this);

    this.toggleModal = this.toggleModal.bind(this)
    this.toggleTModal = this.toggleTModal.bind(this)
    this.state = {
      isOpen: false,
      isOpenM: false,
      isOpenTM: false,
      bTitle: "",
      popoverOpen: false,
      dropdownOpen: false,
      lName: "",
      iduser: "",
      boards: [],
      tName: "",
      tDesc: "",
      idboards:"",
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
  handleCardClick = (idl) => {
    this.setState({
      idl: idl
    })
    this.toggleModal()
  }
  toggleD() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  handleCreateCardSubmit = (data) => {
    this.toggleModal();
    // console.log("......",this.state)
    const cardData = {
      cTitle: this.state.cTitle,
      idlists: this.state.idl,
      idboards: data.idboards,
      idteams: data.idteams,
      iduser: data.iduser
    }
    this.props.action.cardAction.AddCard(cardData)
  }
  handleAddClick = (data) => {
    const listData = {
      lName: this.state.lName,
      iduser: data.iduser,
      idboards: data.idboards,
      idteams: data.idteams
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
  enterPress(e) {
    if (e.key === "Enter") {
      const cardData = {
        cTitle: this.state.cTitle,
        idlists: this.state.idl,
        idboards: data.idboards,
        idteams: data.idteams,
        iduser: data.iduser
      }
      this.props.action.cardAction.AddCard(cardData)
    }
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
  }
  handleChangeTeam = (data) => {

    this.setState({
      dropdownOpen: false
    })
    let idteams = this.state.idteams
    let idboards = data.idboards
    const { history } = this.props;
    this.props.action.teamboardAction.EditTBoard(idboards, idteams, history)

  }

  onDragStart = (e, idcards) => {
    e.dataTransfer.setData("idcards", idcards)
  }
  onDrop = (e, idlist) => {

    let eidcards = e.dataTransfer.getData("idcards");
    this.props.action.cardAction.DEditCard(idlist, eidcards)

  }
  onDragOver = (e) => {
    e.preventDefault();
  }
  render() {
    let data = this.props.teamBoardData[0];
    let teamSelect = this.props.teamData.map((teamData, key) => {
      return (
        <option key={key} value={teamData.idteams}>{teamData.tName}
        </option>
      )
    })

    let teamname = "";
    if (this.props.teamData && this.props.teamData.length > 0 && data && data.idteams !== 0) {
      let iteam = data.idteams
      teamname = this.props.teamData.filter((teams) => {
        return teams.idteams === parseInt(iteam, 10)
      })
    }

    let listData = this.props.listData.map((listData, key) => {
      return (
        <div key={key}
          className="droppable"
          onDragOver={(e) => this.onDragOver(e)}
          style={{ padding: "7px", width: "100%", marginLeft: "1%", WebkitFlex: "0 0 33.333333%", maxWidth: "23.333333%" }}
          onDrop={(e) => this.onDrop(e, listData.idlist)}>
          <Card
            className="card1" body outline color="secondary" style={{ width: "90%", backgroundColor: "#dfe3e6", border: "none", borderRadius: " 6%", boxShadow: "1px 1px 1px grey" }} >
            <CardTitle style={{ fontWeight: " bolder", fontSize: "larger" }}>{listData.lName}</CardTitle>

            {this.props.cardData.map((cardData, key) => {

              if (listData.idlist === cardData.idlists) {
                return (
                  <div key={key}
                    onDragStart={(e) => this.onDragStart(e, cardData.idcards)}
                    draggable
                    className="draggable"
                    onDrop={(e) => this.onDrop(e, cardData.cTitle)}>
                    <div className="cardTitle"> {cardData.cTitle}</div>
                  </div>
                )
              }
              else { return "" }
            })}

            <div className="Addcard" onClick={() => this.handleCardClick(listData.idlist)}>+ Add a card</div>
          </Card>
        </div>
      )
    })
    return (
      <div>
        <Navbd></Navbd>
        <Modal isOpen={this.state.isOpenM} toggle={this.toggleModal}>
          <ModalBody>
            <ModalHeader toggle={this.toggleModal}>Add card </ModalHeader>
            <Form onKeyPress={this.enterPress.bind(this)}>
              <FormGroup>
                <Input type="text" name="cTitle" id="cTitle" placeholder="Enter a title for this card.." onChange={(e) => this.handleOnChange("cTitle", e)} />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleCreateCardSubmit.bind(this,data)}>Add</Button>{' '}
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Navbar expand="md" style={{ backgroundColor: "#3487B8", fontWeight: "bold" }}>
          <Nav navbar>
            <div className="boardnav">{(data) ? data.bTitle : ""}</div>
            <div style={{ borderLeft: "inset", marginLeft: "1%" }} ></div>

            <UncontrolledDropdown nav inNavbar isOpen={this.state.dropdownOpen} toggle={this.toggleD} >
              <DropdownToggle nav style={{ alignSelf: "center", fontWeight: "bold", color: "white", background: "#3487B8", padding: "2%", margin: "1%", marginLeft: "4%", border: "None" }}>
                <center> {(data) ? ((data.idteams === 0)
                  ? (<div className="boardnav" style={{ marginTop: "5%", padding: "2%", marginLeft: "1%" }}>Personal</div>)
                  : (<div className="boardnav" style={{ marginTop: "5%", padding: "2%", marginLeft: "1%" }}>{(teamname) ? (teamname[0].tName) : ""}</div>)) : ""} </center>
              </DropdownToggle>
              <DropdownMenu style={{ width: "max-content" }}>
                <DropdownItem style={{ textAlign: "center" }} header>Add to a team</DropdownItem>
                <DropdownItem divider />
                <Form style={{ width: "max-content", padding: "5%" }} >
                  <FormGroup>
                    <Label for="teamselect">This board is a part of..</Label>
                    <Input type="select" name="idteams" id="idteams" onChange={(e) => this.handleOnChange("idteams", e)} >
                      <option value="0">Personal boards (No team)</option>
                      {teamSelect}
                    </Input>
                  </FormGroup>
                </Form>
                <div style={{ paddingLeft: "5%" }} >
                  <Button color="primary" onClick={this.handleChangeTeam.bind(this, data)} >Add</Button>
                  <a style={{ marginLeft: "35%", float: "center", textAlign: "center" }} href="/boards">Create Team</a></div>
              </DropdownMenu>
            </UncontrolledDropdown >
            <div style={{ borderLeft: "inset", marginLeft: "6%" }} ></div>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav style={{ alignSelf: "center", fontWeight: "bold", color: "white", background: "#3487B8", padding: "2%", margin: "1%", marginLeft: "4%", border: "None" }}>
                <center><div className="boardnav" style={{ marginTop: "5%", marginLeft: "1%", padding: "2%" }}>Private</div></center></DropdownToggle>
              <DropdownMenu>
                <DropdownItem style={{ textAlign: "center" }} header>Select</DropdownItem>
                <DropdownItem divider />
                <DropdownItem >
                  Personal
                    </DropdownItem>
                <DropdownItem >
                  Private
                   </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Navbar>
        <div className="listdiv"  >
          <div className="row" >
            {listData}
            <button id="Popover1" className="buttonlist" >+ Add a list</button>
            <Popover style={{ width: "max-content" }} placement="bottom" isOpen={this.state.isOpen} target="Popover1" toggle={this.togglep}>
              <form className="listForm">
                <input max="25" className="inputForm" type="text" name="lName" id="lName" placeholder="Add list Title" onChange={(e) => this.handleOnChangelist("lName", e)} />
                <button className="but" onClick={this.handleAddClick.bind(this, data)}>Add List</button>
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
    teamBoardData: state.TeamBoardsReducer.teamboards,
    cardData: state.CardsReducer.cards

  }
}
const mapDispatchToProps = (dispatch) => ({
  action: {
    boardAction: bindActionCreators(boardAction, dispatch),
    teamAction: bindActionCreators(teamAction, dispatch),
    listAction: bindActionCreators(listAction, dispatch),
    teamboardAction: bindActionCreators(teamboardAction, dispatch),
    cardAction: bindActionCreators(cardAction, dispatch)
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(BoardDash)