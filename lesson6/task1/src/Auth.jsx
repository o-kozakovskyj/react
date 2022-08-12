/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import Greeting from './Greeting';
// import Login from './Login';
// import Logout from './Logout';

class Auth extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedin: false,
    };
  }

  handleLogin=()=> {
    this.setState({
      isLoggedin: true,
    });
  }

  handleLogout=() =>{
    this.setState({
      isLoggedin: false,
    });
  }

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedin={this.state.isLoggedin} />
        <div>{this.state.isLoggedin ? (
      <button className="btn logout" onClick={ this.handleLogout}>
        Logout
      </button>
    ) : (
      <button className="btn login" onClick={this.handleLogin}>Login</button>
    )}</div>
      </div>
    );
  }
}
export default Auth;
