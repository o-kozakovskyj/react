import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  state = {
    isLoggedIn: false,
  };

  updateStatus = value => {
    this.setState({
      isLoggedIn: value,
    });
  };

  render() {
    let button;
    if (this.state.isLoggedIn === true) {
      button = <Logout updateStatus={this.updateStatus} />;
    } else {
      button = <Login updateStatus={this.updateStatus} />;
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
