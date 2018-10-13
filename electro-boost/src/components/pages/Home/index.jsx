import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import ModalTile from '../../shared/ModalTile';

import './styles.css';

const Home = ({
  userName,
  password,
  confirmPassword,
  handleInputChange,
  handleSubmit,
}) => (
  <form onSubmit={handleSubmit}>
    <ModalTile className="column">
      <h1 className="title">Sign in to Electro Boost</h1>
      <Input
        type="text"
        name="userName"
        value={userName}
        className="input"
        placeholder="Email or Username"
        handleInputChange={handleInputChange}
      />
      <Input
        type="password"
        name="password"
        value={password}
        className="input"
        placeholder="Password"
        handleInputChange={handleInputChange}
      />
      <Input
        type="password"
        name="confirmPassword"
        value={confirmPassword}
        className="input"
        placeholder="Confirm password"
        handleInputChange={handleInputChange}
      />
      <Button type="submit" className="btnCta">
        Sign In
      </Button>
    </ModalTile>
  </form>
);

Home.propTypes = {
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Home;
