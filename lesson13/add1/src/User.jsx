import React from 'react';
import { useParams } from 'react-router-dom';

export default function User() {
  const { userId } = useParams();
  const url = `https://api.github.com/users/${userId}`;

  return (
    <div className="user">
      <img alt="User Avatar" src={url.avatar} className="user__avatar"></img>
      <div className="user__info">
        <span className="user__name">{userId}</span>
        <span className="user__location">{url.location}</span>
      </div>
    </div>
  );
}
