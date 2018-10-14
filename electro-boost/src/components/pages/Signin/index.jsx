import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import Select from '../../shared/Select';
import ModalTile from '../../shared/ModalTile';

import './styles.css';

const Signin = ({
  userName,
  password,
  car,
  handleInputChange,
  handleSubmit,
  handleSelectChange,
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
        placeholder="Enter the Password*"
        handleInputChange={handleInputChange}
      />
      <Select handleSelectChange={handleSelectChange} car={car} />
      <Button type="submit" className="btnCta" onClick={handleSubmit}>
        Sign in
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

Signin.propTypes = {
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  car: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
};

export default Signin;
