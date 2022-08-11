import React, { Component } from 'react';

class Toggler extends Component {
  constructor() {
    super();
    this.state = {
      value: 'on',
    };
  }

  switcher = () => {
    if (this.state.value === 'off') {
      this.setState({ value: 'on' });
    } else {
      this.setState({ value: 'off' });
    }
  };

  render() {
    return (
      <div className="toggler" onClick={() => this.switcher()}>
        {this.state.value}
      </div>
    );
  }
}

export default Toggler;
