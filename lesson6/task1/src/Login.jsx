import React, { Component } from 'react';

class Login extends Component {
  constructor({ updateStatus }) {
    super({ updateStatus });
    this.state = {
      isLoggedin: true,
    };
  }

  onLogin(value) {
    this.props.updateStatus(value);
  }

  render() {
    return (
      <button className="login btn" onClick={() => this.onLogin(this.state.isLoggedin)}>
        Login
      </button>
    );
  }
}
export default Login;
