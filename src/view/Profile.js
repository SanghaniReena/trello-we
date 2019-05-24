import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as boardAction from "../action/BoardsAction";
import * as teamAction from "../action/TeamsAction"
import * as userAction from "../action/UserRegAction"
import Navbd from './Navbd';

import "./Profile.css";
import { Form} from 'reactstrap';
const edit = require("../img/edit.png");
const team = require("../img/teami.png");

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditClicked: false
        };
    }
    componentDidMount = () => {
        let name = localStorage.getItem("userName")
        var myArray = name.split("");
        this.setState({
            fname:name,
            initials:myArray[0]
        })
    }
    handleEditPro = () => {
        this.setState({
            isEditClicked: true
        })
    }
    handleOnChange = (key, e) => {
        this.setState({
          [key]: e.target.value
        })
      }
      handlesave=()=>{
        this.setState({
            isEditClicked: false
        })
      }
    render() {
        let name = localStorage.getItem("userName")
        var myArray = name.split("");
        let AllTeams = []
        AllTeams = this.props.teamData.map((teams, keys) => {
            return (
                <div key={keys} className="singleteam"><div className="inst">{teams.tName}</div></div>
            )
        })

        return (
            <div>
                <Navbd></Navbd>
                <div className="profileUpr">
                    <div className="mainprodiv">
                        <div className="profileRound">
                            <span className="spanpro">{myArray[0]}</span></div>
                        {this.state.isEditClicked === false ? <div className="proDetails">
                            <h1>{name}</h1>
                            <button className="proBtn" onClick={this.handleEditPro.bind(this)} > <img height="20px" width="20px" alt="" src={edit}></img>Edit Profile</button>
                        </div> :
                            <div className="proDetails" >
                                <Form>
                                    <label className="labelpro">Full Name</label>
                                    <br></br>
                                    <input className="inptpro" type="text" name="fname" id="fname" value={this.state.fname} onChange={(e) => this.handleOnChange("fname", e)} />
                                    <br></br>
                                    <label className="labelpro">Initials</label>
                                    <br></br>
                                    <input className="inptpro" value={this.state.initials}  type="text" name="initials" id="initials" onChange={(e) => this.handleOnChange("initials", e)} />
                                    <br></br>
                                    <label className="labelpro">Bio</label>
                                    <br></br>
                                    <textarea className="inptpro" type="text" rows="3" name="bio" id="bio" placeholder="Add bio here..." onChange={(e) => this.handleOnChange("bio", e)} />
                                    <br></br>
                                    <button className="proBtn2" onClick={this.handlesave.bind(this)}>Save</button>
                                    <button className="proBtn3" onClick={this.handlesave.bind(this)}>Cancel</button>
                                </Form>
                            </div>
                        }
                    </div>
                    <div className="lowerbtn" >
                        <button className="proBtn1">Profile</button>
                        <button className="proBtn1">Settings</button>
                    </div>
                </div>
                <div className="profileLower" >
                    <div className="prTitle"><img alt="" height="30px" width="32px" src={team}></img>Teams</div>
                    {AllTeams}
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
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile)); 
