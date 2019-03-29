import "./style.css"

import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


class UserRegistration extends Component {
  state = {
    name: "",
    email: "",
    pw: ""
  }

  render() {
    return (
      <div>
        <h4>Create a Trello Account or sign in to your account</h4>
        <div className="RegForm">
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
            <Input type="pw" name="pw" id="pw" placeholder="Enter password" />
          </FormGroup>
            <Button>Create new Account</Button>
            </Form>
            </div>
        </div>
          );
        }
      }
  export default UserRegistration;