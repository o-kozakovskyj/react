import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './search.scss';
import Greeting from './Search';

const rootElem = document.querySelector('#root');
ReactDOM.render(<Greeting name="Tom" />, rootElem);
