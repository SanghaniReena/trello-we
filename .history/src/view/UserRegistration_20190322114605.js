import React, { Component } from 'react';


class UserRegistration extends Component {
    render() {
      return (
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
        <Form>
        <Button>Create new Account</Button>
      );
    }
  }
  export default UserRegistration;