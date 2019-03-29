import "./style.css"

import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as userAction from '../action/UserRegAction'

class UserRegistration extends Component {
  state = {
    name: "",
    email: "",
    pw: ""
  }
  render() {
    return (
      <div className="RegForm">
        <h4>Create a Trello Account or sign in to your account</h4>
        <div >
        <Form >
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" name="name" id="name" placeholder="Enter name" />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" name="email" id="email" placeholder="Enter email" />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" name="pw" id="pw" placeholder="Enter password" />
          </FormGroup>
            <Button>Create new Account</Button>
            </Form>
            </div>
        </div>
          );
        }
      }
    const mapStateToProps = (state) => {
      return {
        userData: state.users
      }
    }
   const mapDispatchToProps = (dispatch) =>({
     action:{
       userAction:bindActionCreators(userAction,dispatch)
     }
   })
  export default connect(mapStateToProps,mapDispatchToProps)(UserRegistration);