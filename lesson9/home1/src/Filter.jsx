import React, { Component } from 'react';

class Filter extends Component {
  state = {
    value: '',
  };

  handleValue = e => {
    this.setState({
      value: e.target.value,
    });
    this.props.onChange(this.state.value);
    console.log(this.state.value);
  };

  render() {
    return (
      <div className="filter">
        <span className="filter__count">5</span>
        <input
          type="text"
          className="filter__input"
          value={this.state.value}
          onChange={this.handleValue}
        />
      </div>
    );
  }
}
export default Filter;
