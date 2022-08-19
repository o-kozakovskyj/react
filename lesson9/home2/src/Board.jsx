import React, { Component } from 'react';
import Login from './Game';
import Logout from './Square';
import Spinner from './Spinner';

class Board extends Component {
  state = {
    isLoggedIn: false,
    sp: <Spinner />,
    counter: 0,
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  render() {
    let button;
    if (this.state.isLoggedIn === true) {
      button = (
        <>
          <Spinner />
          <Logout onLogout={this.onLogout} />
        </>
      );
    } else {
      button = <Login onLogin={this.onLogin} />;
    }

    return <>{button}</>;
  }
}
export default Board;
