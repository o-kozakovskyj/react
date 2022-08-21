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

  toCelsius = fahrenheit => ((fahrenheit - 32) * 5) / 9;

  toFahrenheit = celsius => (celsius * 9) / 5 + 32;

  tryConvert = (temperature, convert) => {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  };

  onHandleTemp = e => {
    const { name, value } = e.target;
    if (name === 'fahrengeit') {
      this.setState({
        temperature: {
          fahrengeit: value,
          celsius: this.tryConvert(value, this.toCelsius),
        },
      });
    }
    this.setState({
      temperature: {
        fahrengeit: this.tryConvert(value, this.toFahrenheit),
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
