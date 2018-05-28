import React from 'react';
import PropTypes from 'prop-types';

/**
 * Button Component
 *
 * @prop {string} type (default is 'submit')
 *   (more `type` options ['reset','button','menu'])
 * @prop {function} onClick
 * @prop {string} className (`button` unless isNaked)
 * @prop {bool} disabled
 * @prop {bool} isNaked
 * @prop {bool} isPinned
 * @prop {bool} isFull
 * @prop {bool} shouldBlur
 * takes children
 * and optional {...other} custom props
 */

const Button = ({
  onClick,
  type,
  className,
  disabled,
  isFull,
  isNaked,
  isPinned,
  shouldBlur,
  children,
  ...other
}) => {
  // Process 'onClick' prop
  let btn = null;
  function handleClick(event) {
    if (shouldBlur) { btn.blur(); }
    onClick(event);
  }
  
  return (
    <button
      type={type}
      ref={(node) => { btn = node; }}
      onClick={handleClick}
      disabled={disabled}
      {...other}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  isNaked: PropTypes.bool,
  isPinned: PropTypes.bool,
  isFull: PropTypes.bool,
  shouldBlur: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'submit',
  onClick: () => {},
  className: '',
  disabled: false,
  isNaked: false,
  isPinned: false,
  isFull: false,
  shouldBlur: false,
  children: null,
};

export default Button;
