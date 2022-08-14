import React, { Component } from 'react';

class Login extends Component {
  state = {
    isLogin: true,
  };

  render() {
    return (
      <button className="login btn" onClick={() => this.props.updateStatus(this.state.isLogin)}>
        Login
      </button>
    );
  }
}
export default Login;
