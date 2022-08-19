import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  state = {
    value: '',
    listLength: this.props.users.length,
  };

  onChange = filterText => {
    this.setState({
      value: filterText,
    });
  };

  render() {
    return (
      <div>
        <Filter onChange={this.onChange} />
        <ul className="users">
          {[...this.props.users]
            .filter(({ name }) => name.toLowerCase().includes(this.state.value.toLowerCase()))
            .map(user => (
              <User key={user.id} {...user} />
            ))}
        </ul>
      </div>
    );
  }
}
export default UsersList;
