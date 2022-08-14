import React, { Component } from 'react';

class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
    };
  }

  render() {
    return (
      <button className="btn logout" onClick={() => this.props.updateStatus(this.state.isLoggedin)}>
        Logout
      </button>
    );
  }
}
export default Logout;
