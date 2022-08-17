/* eslint-disable camelcase */
import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: 'online',
    classStyle: 'status',
  };

  componentDidMount() {
    window.addEventListener('online', this.isOnline);
    window.addEventListener('offline', this.isOffline);
  }

  isOffline = () => {
    this.state({
      status: 'offline',
      classStyle: 'status status_offline',
    });
  };

  isOnline = () => {
    this.state({
      status: 'online',
      classStyle: 'online',
    });
  };

  componentWillUnmount() {
    window.removeEventListener('online', this.isOnline);
    window.removeEventListener('offline', this.isOffline);
  }

  render() {
    return <div className={this.state.classStyle}>{this.state.status}</div>;
  }
}
export default ConnectionStatus;
