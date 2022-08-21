import React, { Component } from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';

class Calculator extends Component {
  state = {
    temperature: {
      fahrengeit: null,
      celsius: null,
    },
  };

  toCelsius = fahrenheit => Math.round((((fahrenheit - 32) * 5) / 9) * 1000) / 1000;

  toFahrenheit = celsius => Math.round(((celsius * 9) / 5 + 32) * 1000) / 1000;

  onHandleTemp = e => {
    const { name, value } = e.target;
    if (name === 'fahrengeit') {
      this.setState({
        temperature: {
          fahrengeit: value,
          celsius: this.toCelsius(value),
        },
      });
    }
    this.setState({
      temperature: {
        fahrengeit: this.toFahrenheit(value),
        celsius: value,
      },
    });
  };

  render() {
    return (
      <div>
        <TemperatureInput temperature={this.state.temperature} onHandleTemp={this.onHandleTemp} />
        <BoilingVerdict temperature={this.state.temperature} />
      </div>
    );
  }
}
export default Calculator;
