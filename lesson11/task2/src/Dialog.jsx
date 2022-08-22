import React from 'react';
import PropTypes from 'prop-types';

const Dialog = ({ children, isOpen, title, onChange }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="dialog">
      <div className="dialog__heading">
        <h4 className="dialog__title">{title}</h4>
        <button className="dialog__close-btn" onClick={onChange}>
          +
        </button>
      </div>
      <div className="dialog__content">{children}</div>
    </div>
  );
};
Dialog.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.elem,
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
Dialog.defaultProps = {
  title: '',
  isOpen: false,
};
export default Dialog;
