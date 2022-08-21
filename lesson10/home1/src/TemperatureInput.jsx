import React from 'react';

class TemperatureInput extends React.Component {
  render() {
    const scaleNames = {
      c: 'Celsius',
      f: 'Fahrenheit',
    };
    const { temperature } = this.props;
    const { scale } = this.props;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.props.onTemperatureChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
