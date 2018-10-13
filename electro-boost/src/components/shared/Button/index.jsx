import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const Button = ({ type, className, children, onClick }) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  children: {},
};

export default Button;
