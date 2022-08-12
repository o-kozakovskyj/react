import React, { Component } from 'react';

class Login extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isLoggedin: true,
  //   };
  // }

  onLogin = () => {
    this.setState({
      isLoggedin: true,
    });
  };
}
<button className="btn login" onClick={this.onLogin}>
  Login
</button>;

export default Login;
