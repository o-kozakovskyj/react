import React, { Component } from 'react';

class Logout extends Component {
  constructor({ updateStatus }) {
    super({ updateStatus });
    this.state = {
      isLoggedin: false,
    };
  }

  onLogout(value) {
    this.props.updateStatus(value);
  }

  render() {
    return (
      <button className="logout btn" onClick={() => this.onLogout(this.state.isLoggedin)}>
        Logout
      </button>
    );
  }
}
export default Logout;
