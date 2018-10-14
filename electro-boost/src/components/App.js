import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Admin from './pages/Admin';
import User from './pages/User';
import PageNotFound from './pages/PageNotFound';
import auth from '../components/mock/fakeAuth';

class App extends Component {
  state = {
    user: null,
    errorMsg: '',
    userName: '',
    password: '',
    confirmPassword: '',
    car: '',
    isAdmin: false,
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

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
        });
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

  render() {
    const { userName, password, confirmPassword, car, isAdmin } = this.state;
    return (
      <div className="App">
        {/* <Router> */}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Signup
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
          <Route path="/admin" component={Admin} />
          <Route path="/user" component={User} />
          <Route component={PageNotFound} />
        </Switch>
        {/* </Router> */}
      </div>
    );
  }
}

export default App;
