import React from 'react';
import './comments.scss';
import Avatar from './Avatar';
import UserInfo from './UserInfo';

function Comment(props) {
  return (
    <div className="comment">
      <Avatar author={props.author} />
      <UserInfo author={props.author} />
    </div>
  );
}

export default Comment;
