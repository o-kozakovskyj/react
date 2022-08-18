import React, { Component } from 'react';

class ConnectionStatus extends Component {
  state = {
    status: true,
  };

  componentDidMount() {
    window.addEventListener('online', this.handleStatus);
    window.addEventListener('offline', this.handleStatus);
  }

  handleStatus = e => {
    const status = e.target.navigator.onLine;
    this.setState({
      status,
    });
  };

  componentWillUnmount() {
    window.removeEventListener('online', this.handleStatus);
    window.removeEventListener('offline', this.handleStatus);
  }

  render() {
    const classStyle = this.state.status === true ? 'status' : 'status status_offline';
    const statusText = this.state.status === true ? 'online' : 'offline';
    return <div className={classStyle}>{statusText}</div>;
  }
}
export default ConnectionStatus;
