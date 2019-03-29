import React, { Component } from 'react';


class App extends Component {
    render() {
      return (
        <div className="App">
          <Switch>
            <Route exact path="/signup" componet={UserRegistration}>
  
          </Switch>
        </div>
      );
    }
  }
  
  export default App;