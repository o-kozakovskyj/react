import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    const handleStatus = e => {
      setStatus(e.target.navigator.onLine);
    };
    window.addEventListener('online', handleStatus);
    window.addEventListener('offline', handleStatus);
    return () => {
      window.removeEventListener('online', this.handleStatus);
      // window.removeEventListener('offline', this.handleStatus);
    };
  }, []);

  const classStyle = status === true ? 'status' : 'status status_offline';
  const statusText = status === true ? 'online' : 'offline';
  return <div className={classStyle}>{statusText}</div>;
};

export default ConnectionStatus;
