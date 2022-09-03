import React, { useEffect, useState } from 'react';

const getTimeWithOffset = offset => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(currentTime.setHours(currentTime.getHours() + offset + utcOffset));
};
const Clock = ({ location, offset }) => {
  const [loctime, setLoctime] = useState(getTimeWithOffset(offset).toLocaleTimeString());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoctime(getTimeWithOffset(offset).toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">{loctime}</div>
    </div>
  );
};

export default Clock;
