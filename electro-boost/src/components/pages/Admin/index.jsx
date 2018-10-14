import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

const AdminPage = props => (
  <div>{!props.isAdmin ? <Redirect to="/" /> : <h1>Admin page</h1>}</div>
);

AdminPage.propTypes = propTypes;

export default AdminPage;
