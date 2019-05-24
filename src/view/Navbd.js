import "../view/style.css"

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Collapse, DropdownItem, DropdownMenu, DropdownToggle, Nav, Navbar, NavbarToggler, UncontrolledDropdown } from 'reactstrap';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { bindActionCreators } from "redux";
import * as boardAction from "../action/BoardsAction";
import * as teamAction from "../action/TeamsAction"
import * as userAction from "../action/UserRegAction"
const plus = require("../img/plus.png");
class Navbd extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.toggleModal = this.toggleModal.bind(this)
        this.toggleTModal = this.toggleTModal.bind(this)
        this.state = {
            isOpen: false,
            isOpenM: false,
            isOpenTM: false,
            idteams: 0,
            bTitle: "",
            iduser: "",
            boards: [],
            tName: "",
            tDesc: "",
            teams: [],
            auth: true,
        };
    }
    componentDidMount = () => {
        const iduser = localStorage.getItem("iduser")
        this.props.action.teamAction.FetchTeam(iduser);
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

    handleLogout = () => {
        this.setState({
            auth: !this.state.auth
        })
        this.handleLogoutDir();

    }
    handleLogoutDir = () => {
        this.props.action.userAction.logoutAction(false);
        this.props.history.push("/login");
    }
    handleClick = () => {

        const idusers = localStorage.getItem("iduser")
        if (idusers === null) {
            this.props.history.push("/login");
        }
        else {
            this.props.history.push("/boards");
        }
    }
    handleCreateBoardEvent = () => {

        const idusers = localStorage.getItem("iduser")
        this.toggleModal();
        const bData = {
            iduser: idusers,
            bTitle: this.state.bTitle,
            idteams: this.state.idteams
        }
        const { history } = this.props
        this.props.action.boardAction.AddBoard(bData, history)
    }
    handlnavboardClick = () => {
        const iduser = localStorage.getItem("iduser")
        if (iduser !== null) {
            this.props.history.push("/boards");
        }
        else {
            this.props.history.push("/login");
        }
    }
    handleProfileClick = () => {
        const userid = localStorage.getItem("iduser")
        this.props.history.push("/profile/" + userid)
    }
    handleCreateTeamEvent = () => {
        const idusers = localStorage.getItem("iduser")
        this.toggleTModal();
        const tData = {
            iduser: idusers,
            tName: this.state.tName,
            tDesc: this.state.tDesc
        }
        const { history } = this.props;
        this.props.action.teamAction.AddTeam(tData, history)

    }
    render() {
        const uname = localStorage.getItem("userName");
        let teamSelect = this.props.teamData.map((teamData, key) => {
            return (
                <option key={key} value={teamData.idteams}>{teamData.tName}
                </option>
            )
        })
        return (
            <div>
                <div>
                    <Modal isOpen={this.state.isOpenM} toggle={this.toggleModal}>
                        <ModalBody>
                            <ModalHeader toggle={this.toggleModal}>Create board</ModalHeader>
                            <Form>
                                <FormGroup>
                                    <Input type="text" name="bTitle" id="bTitle" placeholder="Add Board Title" onChange={(e) => this.handleOnChange("bTitle", e)} />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="teamselect">Select Team</Label>
                                    <Input type="select" name="idteams" id="idteams" onChange={(e) => this.handleOnChange("idteams", e)} >
                                        <option value="0">No team</option>
                                        {teamSelect}
                                    </Input>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" disabled={this.state.bTitle === ""} onClick={this.handleCreateBoardEvent.bind(this)}>Create</Button>{' '}
                            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={this.state.isOpenTM} toggle={this.toggleTModal}>
                        <ModalBody>
                            <ModalHeader toggle={this.toggleTModal}>Create Team</ModalHeader>
                            <Form>
                                <FormGroup>
                                    <Input type="text" name="tName" id="tName" placeholder="Add team name" onChange={(e) => this.handleOnChange("tName", e)} />
                                </FormGroup>
                            </Form>
                            <Form>
                                <FormGroup>
                                    <Input type="text" name="tDesc" id="tDesc" placeholder="Add team description" onChange={(e) => this.handleOnChange("tDesc", e)} />
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" disabled={this.state.tName === ""} onClick={this.handleCreateTeamEvent.bind(this)}>Create</Button>{' '}
                            <Button color="secondary" onClick={this.toggleTModal}>Cancel</Button>
                        </ModalFooter>
                    </Modal>

                    <Navbar expand="md" style={{ backgroundColor: "#026AA7", fontWeight: "bold", padding: "0.2% 0% 0.2% 0%", fontSize: "18px" }}>
                        <div className="navbord" onClick={this.handlnavboardClick.bind(this)}>Boards</div>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav style={{ color: "white", fontWeight: "bold", background: "white", opacity: "0.5", borderRadius: "9%" }}>
                                        <img height="23px" width="25px" src={plus} alt="" style={{ fill: "white" }}></img>
                                    </DropdownToggle>
                                    <DropdownMenu right>
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
                                <UncontrolledDropdown nav inNavbar >
                                    <DropdownToggle nav caret style={{ color: "#434b54", marginRight: "5%", marginLeft: "5%", background: "white", opacity: "0.5", borderRadius: "9%", fontSize: "18px" }}>
                                        {uname}
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem onClick={this.handleProfileClick.bind(this)}>
                                            Profile
                                        </DropdownItem>
                                        <DropdownItem onClick={this.handleLogout}>
                                            Logout
                                    </DropdownItem>

                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        boardData: state.boards,
        teamData: state.TeamReducer.teams,
        userAuth: state.UserRegReducer.auth,
        userid: state.UserRegReducer.userid
    }
}
const mapDispatchToProps = (dispatch) => ({
    action: {
        boardAction: bindActionCreators(boardAction, dispatch),
        teamAction: bindActionCreators(teamAction, dispatch),
        userAction: bindActionCreators(userAction, dispatch)
    }
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbd));