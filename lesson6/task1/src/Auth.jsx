import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  state = {
    isLoggedIn: false,
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
      button = <Logout onLogout={this.onLogout} />;
    } else {
      button = <Login onLogin={this.onLogin} />;
    }

    return (
      <div className="panel">
        <Greeting isLoggedin={this.state.isLoggedIn} />
        {button}
      </div>
    );
  }
}
export default Auth;
