import React from 'react';
import ReactDOM from 'react-dom';
import UsersList from './UsersList';
import './index.scss';

const rootElem = document.querySelector('#root');
const users = [];
// const users = [
//   { name: 'Bob', age: 21, id: 'id-1' },
//   { name: 'Tom', age: 20, id: 'id-2' },
//   { name: 'Pups', age: 2, id: 'id-3' },
//   { name: 'John', age: 20, id: 'id-4' },
//   { name: 'Bill', age: 20, id: 'id-6' },
//   { name: 'Bill', age: 20, id: 'id-8' },
//   { name: 'Bill', age: 20, id: 'id-10' },
// ];

ReactDOM.render(<UsersList users={users} />, rootElem);
