import React from 'react';

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

export default Expand;
