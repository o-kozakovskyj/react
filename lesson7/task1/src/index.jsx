import React from 'react';
import ReactDOM from 'react-dom';
import NumbersList from './NumbersList';
import './index.scss';

const rootElem = document.querySelector('#root');

ReactDOM.render(<NumbersList numbers={[2, 5, 15, 1, 456]} />, rootElem);
