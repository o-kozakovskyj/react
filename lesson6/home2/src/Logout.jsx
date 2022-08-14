import React, { Component } from 'react';

class Logout extends Component {
  constructor({ updateStatus }) {
    super({ updateStatus });
    this.state = {
      isLoggedIn: false,
    };
  }

  render() {
    return (
      <button className="logout btn" onClick={() => this.props.onLogout()}>
        Logout
      </button>
    );
  }
}
export default Logout;
