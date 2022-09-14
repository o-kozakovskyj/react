import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  constructor({ users }) {
    super({ users });
    this.itemsPerPage = 3;
    this.totalItems = users.length;
  }

  state = {
    currentPage: 1,
  };

  goPrev = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({
        currentPage: currentPage - 1,
      });
    }
  };

  goNext = () => {
    const { currentPage } = this.state;
    if (currentPage < this.totalItems) {
      this.setState({
        currentPage: currentPage + 1,
      });
    }
  };

  render() {
    const { currentPage } = this.state;
    const startIndex = (currentPage - 1) * this.itemsPerPage;
    return (
      <div>
        <Pagination
          currentPage={currentPage}
          goPrev={this.goPrev}
          goNext={this.goNext}
          totalItems={this.totalItems}
          itemsPerPage={this.itemsPerPage}
        />
        <ul>
          {this.props.users
            .map(user => <User key={user.id} {...user} />)
            .filter((_, index) => index >= startIndex && index < startIndex + this.itemsPerPage)}
        </ul>
      </div>
    );
  }
}

export default UsersList;
