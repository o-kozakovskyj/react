import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  state = {
    isLoggedin: false,
  };

  updateStatus = value => {
    this.setState({
      isLoggedin: value,
    });
  };

  render() {
    let button;
    if (this.state.isLoggedin === true) {
      button = <Logout updateStatus={this.updateStatus} />;
    } else {
      button = <Login updateStatus={this.updateStatus} />;
    }

    return (
      <div className="panel">
        <Greeting isLoggedin={this.state.isLoggedin} />
        {button}
      </div>
    );
  }
}
export default Auth;
