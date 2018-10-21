import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Input from '../../shared/Input';
import Button from '../../shared/Button';
import Select from '../../shared/Select';
import ModalTile from '../../shared/ModalTile';

import './styles.css';

const propTypes = {
  user: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    userRole: PropTypes.string.isRequired,
  }),
  userName: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  car: PropTypes.string,
  handleInputChange: PropTypes.func.isRequired,
  handleSignInFormSubmit: PropTypes.func.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  history: PropTypes.shape(),
};

const defaultProps = {
  car: '',
  user: null,
  isAdmin: false,
  history: null,
};

const Signin = ({
  history,
  user,
  userName,
  password,
  car,
  handleInputChange,
  handleSignInFormSubmit,
  handleSelectChange,
}) => (
  // user && (user.userRole === 'admin' || user.userRole === 'user') ? (
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
      <Button
        type="submit"
        className="btnCta"
        onClick={() => {
          if (user) {
            if (user.userRole === 'admin') {
              history.push('/admin');
            } else if (user.userRole === 'user') {
              history.push('/user');
            }
          }
        }}>
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
  // ) : (
  // <p>Oops!</p>
);

// function Signin() {
//   return (
//     <div>
//       <div>{true && <h1>0123</h1>}</div>
//     </div>
//   );
// }

Signin.propTypes = propTypes;
Signin.defaultProps = defaultProps;

export default withRouter(Signin);
