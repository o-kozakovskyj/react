import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
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
export default Auth;
