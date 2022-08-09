/* eslint-disable arrow-body-style */
import React from 'react';
import Avatar from './Avatar';

const UserInfo = props => {
  return (
    <div className="user-info">
      <Avatar avatarUrl={props.author.avatarUrl} name={props.author.name} />
      <div className="user-info__name">{props.author.name}</div>
    </div>
  );
};

export default UserInfo;
