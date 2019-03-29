import "./style.css"

import React, { Component } from 'react';
import { connect } from "react-redux";
import {Link} from "react-router-dom"
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { bindActionCreators } from "redux";
import * as userAction from '../action/UserRegAction'
import NavbarMain from "../view/NavbarMain"


class UserRegistration extends Component {

  state = {
    name: "",
    email: "",
    pw: "",
    err_msg:""
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.err_msg === "") {
        this.setState({
            inValidEmail: ""
        })
        this.props.history.push('/login');
    }
    else {
        this.setState({
            inValidEmail: nextProps.err_msg
        })
    }
}
  componentDidMount(){
    this.props.action.userAction.FetchUsers()
  }
  
  handleOnChange=(key,e)=>{
    this.setState({
      [key]:e.target.value
    })
  }
  handleRegSubmit=()=>{
   
    const users={
      name:this.state.name,
      email:this.state.email,
      pw:this.state.pw ,
      err_msg:""
    }
    this.props.action.userAction.userRegAction(users)
  }
  enterPress(e){
    if (e.key === "Enter") {
        this.props.userData.users.email(this.state);
    }
  }
  render() {
    return (
      <div>
        <NavbarMain></NavbarMain>
     <div className="RegForm">
        <h4 className="Header">Create a Trello Account or <Link to="/login" path="/login">Log in</Link> to your account</h4>
        <div className="Form" >
        
        <Form onKeyPress={this.enterPress.bind(this)}>
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" name="name" id="name" placeholder="Enter name" onChange={(e)=>this.handleOnChange("name",e)}/>
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" name="email" id="email" placeholder="Enter email" onChange={(e)=>this.handleOnChange("email",e)}/>
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" name="pw" id="pw" placeholder="Enter password" onChange={(e)=>this.handleOnChange("pw",e)}/>
          </FormGroup>
            <Button onClick={this.handleRegSubmit.bind(this)}>Create new Account</Button>
            </Form>
            </div>
        </div>
        </div>
          );
        }
      }
    const mapStateToProps = (state) => {
      return {
        userData: state.UserRegReducer.users
      }
    }
   const mapDispatchToProps = (dispatch) =>({
     action:{
       userAction:bindActionCreators(userAction,dispatch)
     }
   })
  export default connect(mapStateToProps,mapDispatchToProps)(UserRegistration); 