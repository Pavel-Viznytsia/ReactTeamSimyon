import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

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

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  className: '',
  value: '',
};

export default Input;
