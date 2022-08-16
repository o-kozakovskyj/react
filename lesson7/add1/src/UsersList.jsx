import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 3,
      totalItems: Math.ceil(this.props.users.length / 3),
    };
  }

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
    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage}
          goPrev={this.goPrev}
          goNext={this.goNext}
          totalItems={this.state.totalItems}
        />
        <ul>
          {this.props.users
            .map(user => <User key={user.id} {...user} />)
            .filter(
              (user, index) =>
                index > (this.state.currentPage - 1) * this.state.itemsPerPage - 1 &&
                index <=
                  (this.state.currentPage - 1) * this.state.itemsPerPage -
                    1 +
                    this.state.itemsPerPage,
            )}
        </ul>
      </div>
    );
  }
}

export default UsersList;
