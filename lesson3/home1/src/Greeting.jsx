import React from 'react';
import moment from 'moment';
// eslint-disable-next-line arrow-body-style
const Greeting = props => {
  return (
    <div className="greeting">{`My name is ${props.firstName} ${
      props.lastName
    }. I'm ${moment().diff(props.birthDate, 'years')} years old`}</div>
  );
};
export default Greeting;
