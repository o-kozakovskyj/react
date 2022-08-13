import React, { Component } from 'react';
import Auth from './Auth';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: true,
    };
  }

  onLogout = () => {
    this.setState({
      isLoggedin: false,
    });
    <Auth isLoggedin={this.state.isLoggedin} />;
  };

  render() {
    return (
      <button className="btn logout" onClick={this.onLogout}>
        Logout
      </button>
    );
  }
}
export default Logout;
