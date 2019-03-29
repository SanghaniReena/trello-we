import React, { Component } from 'react';


class UserLogin extends Component {
    render() {
        return (
            <div className="RegForm">
        <h4>Welcometo Trello! Log in to Trello or create an account</h4>
        <div >
        <Form >
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