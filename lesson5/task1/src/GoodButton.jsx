import React, { Component } from 'react';

class GoodButton extends Component {
  render() {
    return (
      <button className="fancy-button" onClick={e => alert(e.target.textContent)}>
        Fancy-button
      </button>
    );
  }
}
export default GoodButton;
