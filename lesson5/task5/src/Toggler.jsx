import React, { Component } from 'react';

class Toggler extends Component {
  constructor() {
    super();
    this.state = {
      value: 'Off',
    };
  }

  switcher = () => {
    if (this.state.value === 'Off') {
      this.setState({ value: 'On' });
    } else {
      this.setState({ value: 'Off' });
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
