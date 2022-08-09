/* eslint-disable arrow-body-style */
import React from 'react';
import moment from 'moment';

const formatDate = date => moment(date).format('DD MMM YYYY');

const UserInfo = props => {
  return (
    <>
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{formatDate(props.date)}</div>
    </>
  );
};

export default UserInfo;
