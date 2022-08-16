import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    const isPrevPageAvailable = this.props.currentPage === 1 ? '' : '←';
    const isNextPageAvailable = this.props.currentPage === this.props.totalItems ? '' : '→';

    return (
      <div className="pagination">
        <button
          type="button"
          className="btn"
          disabled={!isPrevPageAvailable}
          onClick={this.props.goPrev}
        >
          {isPrevPageAvailable}
        </button>
        <span className="pagination__page">{this.props.currentPage}</span>
        <button
          type="button"
          className="btn"
          disabled={!isNextPageAvailable}
          onClick={this.props.goNext}
        >
          {isNextPageAvailable}
        </button>
      </div>
    );
  }
}

export default Pagination;
