import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    value: '',
  };

  onChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const usersFound = [...this.props.users]
      .filter(({ name }) => name.toLowerCase().includes(this.state.value.toLowerCase()))
      .map(user => <User key={user.id} {...user} />);
    return (
      <div>
        <Filter onChange={this.onChange} count={usersFound.length} filterText={this.state.value} />
        <ul className="users">{usersFound}</ul>
      </div>
    );
  }
}
export default UsersList;
