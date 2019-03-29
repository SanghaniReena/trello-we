import React, { Component } from 'react';
import {Link} from "react-router-dom"
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';


class UserLogin extends Component {
    state = {
        email: "",
        pw: ""
      }
      handleOnChange=(key,e)=>{
          this.setState({
              [key]:e.target.value
          })
      }
      handleLoginSubmit=()=>{

      }
    render() {
        return (
        <div className="RegForm">
        <h4 className="Header">Welcome to Trello! Log in to Trello or create an account</h4>
        <div className="Form" >
        <Form >
            <FormGroup>
                <Label>Email</Label>
                <Input type="email" name="email" id="email" placeholder="Enter email" onChange={(e)=>handleOnChange(e,"email")} />
            </FormGroup>
            <FormGroup>
                <Label>Password</Label>
                <Input type="password" name="pw" id="pw" placeholder="Enter password" onChange={(e)=>handleOnChange(e,"pw")} />
            </FormGroup>
                <Button onClick={this.handleLoginSubmit.bind(this)}>Log In</Button>
            <FormGroup>
                <Link to="/forgetpw">Forget Password?</Link>
            </FormGroup>
            </Form>
            </div>
            </div>
        );
    }
}

export default UserLogin;