import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ children, display, openContent, title }) => {
  const content = display === true ? <div className="expand__content">{children}</div> : null;
  const arrow = display === true ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={openContent}>
          <i className={arrow}></i>
        </button>
      </div>
      {content}
    </div>
  );
};

Expand.propTypes = {
  display: PropTypes.bool,
  children: PropTypes.elem,
  title: PropTypes.string,
  openContent: PropTypes.func.isRequired,
};
Expand.defaultProps = {
  title: '',
  display: false,
};
export default Expand;
