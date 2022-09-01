import React from 'react';
import moment from 'moment';

// eslint-disable-next-line arrow-body-style
const Profile = props => {
  return (
    <div className="profile">
      <div className="profile__name">{`${props.userData.firstName} ${props.userData.lastName}`}</div>
      <div className="profile__birth">{`Was born ${moment(props.userData.birthDate).format(
        'DD MMM YY',
      )} in ${props.userData.birthPlace}`}</div>
    </div>
  );
};
export default Profile;
