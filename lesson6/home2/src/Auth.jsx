import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// algo
// 1. show Login by default ++
// 2. after Login click - show Spinner for 2 seconds ++
// 3. hide Spinner, show Logout ++
// 4. after Logout click - show Login ++

class Auth extends Component {
  state = {
    isLoggedIn: false,
    isSpinner: false,
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
      isSpinner: true,
    });
    setTimeout(() => {
      this.setState({
        isSpinner: false,
      });
    }, 2000);
  };

  render() {
    const { isLoggedIn, isSpinner } = this.state;

    if (isLoggedIn && isSpinner) {
      return <Spinner size={20} />;
    }
    if (isLoggedIn && !isSpinner) {
      return <Logout onLogout={this.onLogout} />;
    }
    return <Login onLogin={this.onLogin} />;
  }
}
export default Auth;
