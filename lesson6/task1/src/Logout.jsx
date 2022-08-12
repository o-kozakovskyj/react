import React, { Component } from 'react';

class Logout extends Component {
constructor(props){
  super(props);
  this.state={
    isLoggedin = true,
  };
}
  render() {
    return <button className="btn logout">Logout</button>;
  }
}
export default Logout;
