import React, { Component } from 'react';

class GoodButton extends Component {
  render() {
    return (
      <button className="fancy-button" onClick={() => alert('Good job!')}>
        Fancy-button
      </button>
    );
  }
}
export default GoodButton;
