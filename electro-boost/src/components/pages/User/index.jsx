import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../shared/Button/index';

const propTypes = {
  car: PropTypes.string,
  handleLogout: PropTypes.func.isRequired,
};

const defaultProps = {
  car: '',
};

const UserPage = ({ car, handleLogout }) => (
  <div>
    <h1>User page</h1>
    <p>Your car is: {car}</p>
    <Button onClick={handleLogout}>Log out</Button>
  </div>
);

UserPage.propTypes = propTypes;
UserPage.defaultProps = defaultProps;

export default UserPage;
