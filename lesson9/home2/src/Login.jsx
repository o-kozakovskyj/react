import React, { Component } from 'react';

class Login extends Component {
  constructor({ updateStatus }) {
    super({ updateStatus });
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    return (
      <button className="login btn" onClick={() => this.props.onLogin()}>
        Login
      </button>
    );
  }
}
export default Login;
