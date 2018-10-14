import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

const propTypes = {
  handleSelectChange: PropTypes.func.isRequired,
  car: PropTypes.string,
};

const defaultProps = {
  car: '',
};

const Select = ({ handleSelectChange, car }) => (
  <select
    onChange={handleSelectChange}
    className="select"
    name="cars"
    value={car}>
    <option value="">--Choose your car--*</option>
    <option value="0123">0123</option>
    <option value="3650">3650</option>
    <option value="1444">1444</option>
    {/* Children.count.map(item => <option value="">{item}</option>) */}
  </select>
);

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
