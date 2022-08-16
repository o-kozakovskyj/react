import React, { Component } from 'react';

class Life extends Component {
  constructor(props) {
    super(props);
    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    console.log('componentDidMount: API, subscriptions');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate(prevProps, prevState): decide to render or not render');
    return true;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
    return true;
  }

  componentWillUnmount() {
    console.log('componentWillUnmoun(): cleanup before DOM related to component will be removed');
  }

  render() {
    console.log('return React element to build DOM');
    return <button>Hello!</button>;
  }
}
export default Life;
