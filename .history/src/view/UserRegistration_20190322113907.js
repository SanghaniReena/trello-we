import React, { Component } from 'react';


class UserRegistration extends Component {
    render() {
      return (
          <Switch>
            <Route exact path="/signup" componet={UserRegistration}>
  
          </Switch>
        
      );
    }
  }
  
  export default UserRegistration;