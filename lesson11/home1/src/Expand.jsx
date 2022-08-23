import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Expand extends Component {
  state = {
    display: false,
  };

  changeContent = () => {
    this.setState({
      display: !this.state.display,
    });
  };

  render() {
    const content =
      this.state.display === true ? (
        <div className="expand__content">{this.props.children}</div>
      ) : null;
    const arrow = this.state.display === true ? 'up' : 'down';
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.changeContent}>
            <i className={`fas fa-chevron-${arrow}`}></i>
          </button>
        </div>
        {content}
      </div>
    );
  }
}

Expand.propTypes = {
  display: PropTypes.bool,
  title: PropTypes.string,
  openContent: PropTypes.func.isRequired,
};
Expand.defaultProps = {
  title: 'Some title',
  display: false,
};
export default Expand;
