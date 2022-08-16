import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    const isPrevPageAvailable = this.props.currentPage === 1 ? '' : '←';
    const isNextPageAvailable = this.props.currentPage === this.props.totalItems ? '' : '→';
    return (
      <div className="pagination">
        <button className="btn" onClick={this.props.goPrev}>
          {isPrevPageAvailable}
        </button>
        <span className="pagination__page">{this.props.currentPage}</span>
        <button className="btn" onClick={this.props.goNext}>
          {isNextPageAvailable}
        </button>
      </div>
    );
  }
}

export default Pagination;
