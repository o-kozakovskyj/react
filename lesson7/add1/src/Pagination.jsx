import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    let disabledPrev;
    let disabledNext;
    let isPrevPageAvailable;
    let isNextPageAvailable;

    if (this.props.currentPage === 1) {
      isPrevPageAvailable = '';
      disabledPrev = 'disabled';
    } else {
      isPrevPageAvailable = '←';
      disabledPrev = null;
    }
    if (this.props.currentPage === this.props.totalItems) {
      isNextPageAvailable = '';
      disabledNext = 'disabled';
    } else {
      isNextPageAvailable = '→';
      disabledNext = null;
    }
    return (
      <div className="pagination">
        <button className="btn" disabled={disabledPrev} onClick={this.props.goPrev}>
          {isPrevPageAvailable}
        </button>
        <span className="pagination__page">{this.props.currentPage}</span>
        <button className="btn" disabled={disabledNext} onClick={this.props.goNext}>
          {isNextPageAvailable}
        </button>
      </div>
    );
  }
}

export default Pagination;
