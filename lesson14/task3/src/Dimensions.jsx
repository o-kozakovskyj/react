import React, { useEffect, useState } from 'react';

const Dimensions = () => {
  const [demensions, setDimensions] = useState({
    width: null,
    height: null,
  });
  const { width, height } = demensions;
  useEffect(() => {
    const { innerHeight, innerWidth } = window;
    setDimensions({ width: innerWidth, height: innerHeight });
    const handleResize = e => {
      // eslint-disable-next-line no-shadow
      const { innerHeight, innerWidth } = e.target;
      setDimensions({ width: innerWidth, height: innerHeight });
    };
    window.addEventListener('resize', handleResize);
  }, []);
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
