import React, { Component } from 'react';

class Spinner extends Component {
  state = {
    spinnerElem: <span className="spinner"></span>,
  };

  delay() {
    setTimeout(
      this.setState.state({
        spinnerElem: null,
      }),
      5000,
    );
  }

  render() {
    return this.delay;
  }
}
export default Spinner;
