import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

const AdminPage = props => {
  if (!props.isAdmin) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <h1>Admin page</h1>
    </div>
  );
};

AdminPage.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default AdminPage;