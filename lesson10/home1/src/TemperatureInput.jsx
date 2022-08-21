import React from 'react';

const TemperatureInput = ({ onHandleTemp, temperature }) => (
  <>
    <fieldset>
      <legend>Enter temperature in Celsius:</legend>
      <input value={temperature.celsius} onChange={onHandleTemp} name="celsius" />
    </fieldset>
    <fieldset>
      <legend>Enter temperature in Fahrengeit:</legend>
      <input value={temperature.fahrengeit} onChange={onHandleTemp} name="fahrengeit" />
    </fieldset>
  </>
);

export default TemperatureInput;
