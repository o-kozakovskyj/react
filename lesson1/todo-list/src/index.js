import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElem = document.querySelector('#root');
const elem = (
  <h1 className='title'>Todo list</h1>
);
ReactDOM.render(elem, rootElem);