import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    value: '',
    listLength: this.props.users.length,
    filterText: 'fff',
  };

  onChange = filterText => {
    this.setState({
      value: filterText,
    });
  };

  render() {
    const usersOnFind = [...this.props.users]
      .filter(({ name }) => name.toLowerCase().includes(this.state.value.toLowerCase()))
      .map(user => <User key={user.id} {...user} />);
    return (
      <div>
        <Filter onChange={this.onChange} count={usersOnFind.length} filterText={this.state.value} />
        <ul className="users">{usersOnFind}</ul>
      </div>
    );
  }
}
export default UsersList;
