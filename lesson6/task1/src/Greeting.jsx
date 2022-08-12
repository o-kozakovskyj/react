import React from 'react';
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

const Greeting = ({ isLoggedin }) => {
  if (isLoggedin) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};
export default Greeting;
