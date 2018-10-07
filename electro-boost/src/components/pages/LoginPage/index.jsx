import React from 'react';

import './styles.css';

const LoginPage = () => {
  return (
    <div className="loginPage">
      <h1>Login page</h1>
      <form className="loginForm" action="submit">
          <input className="formInput" type="text" placeholder='Login'/>
          <input className="formInput" type="password" placeholder='Password'/>
          <button type="submit">Log-in</button>
        </form>
    </div>
  );
};

export default LoginPage;