import React, { Component } from 'react';
import User from './User';

class UsersList extends Component {
  state = {
    btnText: null,
  };

  changeSort = () => {
    const newBtnText = this.state.btnText === 'asc' ? 'desc' : 'asc';

    this.setState({
      btnText: newBtnText,
    });
  };

  render() {
    let userList;
    if (this.state.btnText) {
      userList = [...this.props.users].sort((a, b) =>
        this.state.btnText === 'asc' ? a.age - b.age : b.age - a.age,
      );
    } else {
      userList = this.props.users;
    }
    return (
      <div>
        <button className="btn" onClick={this.changeSort}>
          {this.state.btnText || '-'}
        </button>
        <ul className="users">
          {userList.map(user => (
            <User {...user} key={user.id} />
          ))}
        </ul>
      </div>
    );
  }
}
export default UsersList;
