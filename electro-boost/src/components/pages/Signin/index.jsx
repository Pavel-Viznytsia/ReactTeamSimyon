import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import Select from '../../shared/Select';
import ModalTile from '../../shared/ModalTile';

import './styles.css';

const propTypes = {
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  car: PropTypes.string,
  user: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    userRole: PropTypes.string.isRequired,
  }),
  handleInputChange: PropTypes.func.isRequired,
  handleSignInFormSubmit: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
};

const defaultProps = {
  car: '',
  user: null,
  isAdmin: false,
};

const Signin = ({
  userName,
  password,
  car,
  handleInputChange,
  handleSignInFormSubmit,
  handleSelectChange,
}) => (
  <ModalTile>
    <form className="form" onSubmit={handleSignInFormSubmit}>
      <h1 className="title">Sign In to Electro Boost</h1>
      <Input
        type="text"
        name="userName"
        value={userName}
        className="input"
        placeholder="Email or Username*"
        handleInputChange={handleInputChange}
      />
      <Input
        type="password"
        name="password"
        value={password}
        className="input"
        placeholder="Enter the Password*"
        handleInputChange={handleInputChange}
      />
      <Select handleSelectChange={handleSelectChange} car={car} />
      <Button type="submit" className="btnCta">
        <Link className="href" to="/admin" onClick={handleSignInFormSubmit}>
          Sign in
        </Link>
      </Button>
      <span className="signInBlock">
        Don`t have an account?{' '}
        <Link className="href" to="/">
          Sign Up.
        </Link>
      </span>
    </form>
  </ModalTile>
);

Signin.propTypes = propTypes;
Signin.defaultProps = defaultProps;

export default Signin;
