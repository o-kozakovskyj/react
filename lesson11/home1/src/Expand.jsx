import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ children, display, openContent, title }) => {
  const content = display === true ? <div className="expand__content">{children}</div> : null;
  const arrow = display === true ? 'up' : 'down';
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={openContent}>
          <i className={`fas fa-chevron-${arrow}`}></i>
        </button>
      </div>
      {content}
    </div>
  );
};

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
