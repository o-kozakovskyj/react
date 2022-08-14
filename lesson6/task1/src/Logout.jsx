import React, { Component } from 'react';

class Logout extends Component {
  constructor({ updateStatus }) {
    super({ updateStatus });
    this.state = {
      isLoggedIn: false,
    };
  }

  onLogout(value) {
    this.props.updateStatus(value);
  }

  render() {
    return (
      <button className="logout btn" onClick={() => this.onLogout(this.state.isLoggedIn)}>
        Logout
      </button>
    );
  }
}
export default Logout;
