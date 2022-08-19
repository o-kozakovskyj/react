import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList';
import './index.scss';

const rootElem = document.querySelector('#root');
const users = [
  { name: 'Tom', age: 13, id: 'id-1' },
  { name: 'Bob', age: 14, id: 'id-2' },
  { name: 'Ann', age: 100, id: 'id-3' },
];
ReactDOM.render(<UsersList users={users} />, rootElem);
