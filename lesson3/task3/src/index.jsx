import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from './Comment';

const rootElem = document.querySelector('#root');
const author = {
  name: 'Tom',
  avatarUrl: 'https://github.com/github.png?size=460',
};

ReactDOM.render(<Comment user={author} text="Good job!" date={new Date('2022-01-01')} />, rootElem);
