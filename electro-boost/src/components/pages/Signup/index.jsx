import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import ModalTile from '../../shared/ModalTile';

import './styles.css';

const propTypes = {
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const Signup = ({
  userName,
  password,
  confirmPassword,
  handleInputChange,
  handleSubmit,
}) => (
  <ModalTile>
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="title">Sign Up to Electro Boost</h1>
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
        placeholder="Set A Password*"
        handleInputChange={handleInputChange}
      />
      <Input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        className="input"
        placeholder="Confirm Password*"
        handleInputChange={handleInputChange}
      />

      <Button type="submit" className="btnCta" onClick={handleSubmit}>
        {/* <Link to="/admin"> */}
        Sign Up
        {/* </Link> */}
      </Button>

      {/* <Route exact path="/admin" component={Admin} /> */}

      <span className="signInBlock">
        Already have an account?{' '}
        <Link className="href" to="/signin">
          Sign in.
        </Link>
      </span>
    </form>
  </ModalTile>
);

Signup.propTypes = propTypes;

export default Signup;
