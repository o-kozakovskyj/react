import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super();
    this.state = {
      counter: props.start,
    };
    setInterval(() => {
      this.setState({
        // eslint-disable-next-line prettier/prettier, react/no-direct-mutation-state
        counter: this.state.counter += 1
      });
    }, props.interval);
  }

  render() {
    return <div className="counter">{this.state.counter}</div>;
  }
}
export default Counter;
