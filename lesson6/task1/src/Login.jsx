import React, { Component } from 'react';

class Login extends Component {
  constructor({ updateStatus }) {
    super({ updateStatus });
    this.state = {
      isLoggedIn: true,
    };
  }

  onLogin(value) {
    this.props.updateStatus(value);
  }

  render() {
    return (
      <button className="login btn" onClick={() => this.onLogin(this.state.isLoggedIn)}>
        Login
      </button>
    );
  }
}
export default Login;
