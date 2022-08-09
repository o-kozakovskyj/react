import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Comment from './Comment';

const rootElem = document.querySelector('#root');
const UserInfo = {
  name: 'Tom',
  avatarUrl: 'https://github.com/github.png?size=460',
};

ReactDOM.render(
  <Comment author={UserInfo} text="Good job!" date={new Date('2022-01-01')} />,
  rootElem,
);
