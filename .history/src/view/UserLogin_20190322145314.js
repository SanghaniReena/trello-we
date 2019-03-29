import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


class UserLogin extends Component {
    state = {
        email: "",
        pw: ""
      }
    render() {
        return (
            <div className="RegForm">
        <h4>Welcome to Trello! Log in to Trello or create an account</h4>
        <Form >
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" name="email" id="email" placeholder="Enter email" />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input type="password" name="pw" id="pw" placeholder="Enter password" />
          </FormGroup>
            <Button>Log In</Button>
            <Link to="/forgetpw" >Forget Password?</Link>
            </Form>
            </div>
        );
    }
}

export default UserLogin;