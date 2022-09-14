import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  state = {
    currentPage: 1,
    itemsPerPage: 3,
    totalItems: this.props.users.length,
  };

  goPrev = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1,
      });
    }
  };

  goNext = () => {
    if (this.state.currentPage < this.state.totalItems) {
      this.setState({
        currentPage: this.state.currentPage + 1,
      });
    }
  };

  render() {
    const { currentPage, totalItems, itemsPerPage } = this.state;
    return (
      <div>
        <Pagination
          currentPage={currentPage}
          goPrev={this.goPrev}
          goNext={this.goNext}
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
        />
        <ul>
          {this.props.users
            .map(user => <User key={user.id} {...user} />)
            .filter(
              (_, index) =>
                index > (currentPage - 1) * itemsPerPage - 1 &&
                index <= (currentPage - 1) * itemsPerPage - 1 + itemsPerPage,
            )}
        </ul>
      </div>
    );
  }
}

export default UsersList;
