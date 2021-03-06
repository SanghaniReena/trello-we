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
      <div className="RegForm">
        <h4>Create a Trello Account or sign in to your account</h4>
        <Form>
          <FormGroup>
            <Label>Name</Label>
            <Input type="name" name="name" id="name" placeholder="Enter name" />
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
          );
        }
      }
  export default UserRegistration;