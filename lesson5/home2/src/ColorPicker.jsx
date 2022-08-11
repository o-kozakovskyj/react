import React, { Component } from 'react';

class ColorPicker extends Component {
  constructor() {
    super();
    this.state = {
      color: '',
    };
  }

  getColor(color) {
    this.setState({
      color,
    });
  }

  clearColor() {
    this.setState({
      color: '',
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.getColor('Coral')}
            onMouseOut={() => this.clearColor()}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.getColor('Aqua')}
            onMouseOut={() => this.clearColor()}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.getColor('Bisque')}
            onMouseOut={() => this.clearColor()}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
