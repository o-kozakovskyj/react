/* eslint-disable arrow-body-style */
import React from 'react';

const onLogin = props => {
  // eslint-disable-next-line no-param-reassign
  props.isLoggedin = true;
};
const Login = props => {
  return <button className="btn logout">Login</button>;
};
export default Login;
