import React, { Component } from 'react';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};
class Clock extends Component {
  constructor(props) {
    super();
    this.state = {
      city: props.location,
      time: getTimeWithOffset(props.offset).toLocaleTimeString(),
    };
    setInterval(() => {
      this.setState({
        time: getTimeWithOffset(props.offset).toLocaleTimeString(),
      });
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.state.city}</div>
        <div className="clock__time">{this.state.time}</div>
      </div>
    );
  }
}
export default Clock;
