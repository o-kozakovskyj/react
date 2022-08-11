import React, { Component } from 'react';

const red = '#f00';
const green = '#0f0';
const blue = '#00f';
class Counter extends Component {
  SetBodyColor = color => {
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <>
        <button
          className="colors__button"
          style={{ backgroundColor: red }}
          onClick={() => this.SetBodyColor(red)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: green }}
          onClick={() => this.SetBodyColor(green)}
        ></button>
        <button
          className="colors__button"
          style={{ backgroundColor: blue }}
          onClick={() => this.SetBodyColor(blue)}
        ></button>
      </>
    );
  }
}
export default Counter;
