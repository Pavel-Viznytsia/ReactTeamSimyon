import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

const defaultProps = {
  className: '',
  value: '',
};

const Input = ({
  className,
  name,
  value,
  type,
  placeholder,
  handleInputChange,
}) => (
  <input
    className={className}
    name={name}
    type={type}
    value={value}
    placeholder={placeholder}
    onChange={handleInputChange}
  />
);

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
