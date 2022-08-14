import React, { Component } from 'react';

class Logout extends Component {
  state = {
    isLogin: false,
  };

  render() {
    return (
      <button className="login btn" onClick={() => this.props.updateStatus(this.state.isLogin)}>
        Logout
      </button>
    );
  }
}
export default Logout;
