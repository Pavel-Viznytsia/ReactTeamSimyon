import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../shared/Button';

const propTypes = {
  car: PropTypes.string,
  handleLogout: PropTypes.func.isRequired,
};

const defaultProps = {
  car: '',
};

const AdminPage = ({ car, handleLogout }) => (
  <div>
    <h1>Admin page</h1>
    <p>Your car is: {car}</p>
    <Button onClick={handleLogout}>Log out</Button>
  </div>
);

AdminPage.propTypes = propTypes;
AdminPage.defaultProps = defaultProps;

export default AdminPage;
