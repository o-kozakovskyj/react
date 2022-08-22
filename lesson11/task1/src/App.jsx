import React, { Component } from 'react';
import Numbers from './Numbers';
import EvenNumbers from './EvenNumbers';
import OddNumbers from './OddNumbers';
import Number from './Number';

class App extends Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="app">
        <EvenNumbers number={this.state.number} title={'Even number'} />
        <Numbers number={this.state.number} title={'All numbers'} />
        <OddNumbers number={this.state.number} title={'Odd number'} />
        <Number number={17} title={'Just 17'} />
      </div>
    );
  }
}
export default App;
