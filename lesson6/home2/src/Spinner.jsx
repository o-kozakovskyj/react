import React, { Component } from 'react';

class Spinner extends Component {
  render() {
    const spinnerStyles = {
      display: 'inline - block',
      border: `${this.props.size}px solid #ccc`,
      borderLeftColor: 'transparent',
      animation: 'spin .5s infinite linear',
      borderRadius: '50%',
    };
    return <span className="spinner" style={spinnerStyles}></span>;
  }
}
export default Spinner;
