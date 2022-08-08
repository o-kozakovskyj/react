import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElem = document.querySelector('#root');
const renderTime = time => {
  const seconds = time.getSeconds();
  const backgroundColor = seconds % 2 === 0 ? '#fff' : '#000';
  const textColor = seconds % 2 !== 0 ? '#fff' : '#000';
  const styles = { backgroundColor, color: textColor };
  const elem = (
    <div className="seconds" style={styles}>
      Now is {seconds}
    </div>
  );
  ReactDOM.render(elem, rootElem);
};

setInterval(() => renderTime(new Date()), 1000);
