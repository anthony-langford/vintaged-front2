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
 * @prop {bool} shouldBlur
 * takes children
 * and optional {...other} custom props
 */

const Button = ({
  type,
  onClick,
  className,
  disabled,
  shouldBlur,
  children,
  ...other
}) => {
  // Process 'onClick' prop and handle 'shouldBlur'
  let btn = null;
  function handleClick(event) {
    if (shouldBlur) {
      btn.blur();
    }
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
  shouldBlur: PropTypes.bool,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'submit',
  onClick: () => {},
  className: '',
  disabled: false,
  shouldBlur: false,
  children: null,
};

export default Button;
