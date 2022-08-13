/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import Greeting from './Greeting';
// import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
      isLoggedin: props.isLoggedin,
    };
    console.log(this.isLoggedin)
  };

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
        {this.state.isLoggedin ? (
      <Logout isLoggedin={this.state.isLoggedin} />
    ) : (
      <button className="btn login" onClick={this.handleLogin}>Login</button>
    )}
      </div>
    );
  }
}
export default Auth;
