import React, { Component } from 'react';
import UserForm from './UserFofm';

class App extends Component {
  createUser = objUser => {
    console.log(objUser);
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;
