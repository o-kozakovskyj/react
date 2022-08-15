/* eslint-disable react/jsx-key */
import React, { Component } from 'react';

class NumbersList extends Component {
  render() {
    const numbersList = [...this.props.numbers].map(number => <li>{number}</li>);
    return <ul>{numbersList}</ul>;
  }
}
export default NumbersList;
