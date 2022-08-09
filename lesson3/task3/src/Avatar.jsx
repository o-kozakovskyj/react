/* eslint-disable arrow-body-style */
import React from 'react';

const Avatar = props => {
  return (
    <div className="user-info">
      <img className="avatar" src={props.author.avatarUrl} alt={props.author.name} />
      <div className="user-info__name">{props.author.name}</div>
    </div>
  );
};

export default Avatar;
