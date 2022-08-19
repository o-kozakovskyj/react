import React, { Component } from 'react';

class Game extends Component {
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
export default Game;
