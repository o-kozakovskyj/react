import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  state = {
    isLogin: false,
  };

  updateStatus = value => {
    this.setState({
      isLogin: value,
    });
  };

  render() {
    if (this.state.isLogin === false) {
      return <Login updateStatus={this.updateStatus} />;
    }
    if (this.state.isLogin === true) {
      return (
        <>
          <Spinner />
          <Logout updateStatus={this.updateStatus} />
        </>
      );
    }
    return null;
  }
}
export default Auth;
