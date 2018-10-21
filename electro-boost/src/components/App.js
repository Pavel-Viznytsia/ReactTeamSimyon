import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Admin from './pages/Admin';
import User from './pages/User';
import PageNotFound from './pages/PageNotFound';
import auth from '../components/mock/fakeAuth';

const INITIAL_STATE = {
  user: null,
  errorMsg: '',
  userName: '',
  password: '',
  isLogin: false,
  confirmPassword: '',
  car: '',
};

class App extends Component {
  state = { ...INITIAL_STATE };

  handleInputChange = ({ target }) => {
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleSignInFormSubmit = event => {
    event.preventDefault();

    const { userName, password } = this.state;

    auth(userName, password)
      .then(userData => {
        this.setState({
          user: userData,
          isLogin: true,
        });

        // this.resetState();
      })
      .catch(errorMsg =>
        this.setState({
          errorMsg: errorMsg.errorAuthMsg,
        }),
      );
  };

  handleSelectChange = event => {
    event.preventDefault();

    this.setState({
      car: event.target.value,
    });
  };

  handleLogout = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const {
      user,
      userName,
      password,
      confirmPassword,
      car,
      isLogin,
      isAdmin,
      isUser,
    } = this.state;
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Signup
                user={user}
                userName={userName}
                password={password}
                confirmPassword={confirmPassword}
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
              />
            )}
          />
          <Route
            path="/signin"
            render={() => (
              <Signin
                user={user}
                userName={userName}
                password={password}
                car={car}
                isAdmin={isAdmin}
                handleInputChange={this.handleInputChange}
                handleSignInFormSubmit={this.handleSignInFormSubmit}
                handleSelectChange={this.handleSelectChange}
              />
            )}
          />
          <Route
            path="/admin"
            render={() => <Admin car={car} handleLogout={this.handleLogout} />}
          />
          <Route
            path="/user"
            render={() => <User car={car} handleLogout={this.handleLogout} />}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
