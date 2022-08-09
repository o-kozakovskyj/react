import React from 'react';
import './comments.scss';
import Avatar from './Avatar';
import UserInfo from './UserInfo';

function Comment(props) {
  return (
    <div className="comment">
      <div className="user-info">
        <Avatar author={props.author} />
        <div className="user-info__name">{props.author.name}</div>
      </div>
      <UserInfo author={props.author} />
    </div>
  );
}

export default Comment;
