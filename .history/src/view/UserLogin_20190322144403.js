import React, { Component } from 'react';


class UserLogin extends Component {
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

export default UserLogin;