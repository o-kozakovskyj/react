import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
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
    if (currentPage < this.props.users.length) {
      this.setState({
        currentPage: currentPage + 1,
      });
    }
  };

  render() {
    const itemsPerPage = 3;
    const { users } = this.props;
    const { currentPage } = this.state;
    const startIndex = (currentPage - 1) * itemsPerPage;
    return (
      <div>
        <Pagination
          currentPage={currentPage}
          goPrev={this.goPrev}
          goNext={this.goNext}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />
        <ul>
          {users.slice(startIndex, startIndex + itemsPerPage).map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
