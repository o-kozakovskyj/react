import React from 'react';

export default function Spinner({ size }) {
  const spinnerStyles = {
    display: 'inline - block',
    border: `${size}px solid #ccc`,
    borderLeftColor: 'transparent',
    animation: 'spin .5s infinite linear',
    borderRadius: '50%',
  };
  return <span className="spinner" style={spinnerStyles}></span>;
}
