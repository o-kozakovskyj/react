/* eslint-disable camelcase */
import React, { Component } from 'react';

class User extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    this.fetched(this.props.userId);
  }

  fetched = userId => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          user: data,
        }),
      );
  };

  render() {
    const { user } = this.state;
    if (!user) {
      return null;
    }
    const { name, location, avatar_url } = user;
    return (
      <div className="user">
        <img alt="User Avatar" className="user__avatar" src={avatar_url}></img>
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}
export default User;
