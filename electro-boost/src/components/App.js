import React, { Component } from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Admin from './pages/Admin';
import UserPage from './pages/User';
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
  };
  onAuth = (login, pass) => {
    auth(login, pass)
      .then(userData =>
        this.setState({
          user: userData,
        }),
      )
      .catch(errorMsg =>
        this.setState({
          errorMsg: errorMsg.errorAuthMsg,
        }),
      );
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
  };

  handleSelectChange = event => {
    this.setState({
      car: event.target.value,
    });
  };

  render() {
    const { userName, password, confirmPassword, car } = this.state;
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
                car={car}
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
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
                handleSelectChange={this.handleSelectChange}
              />
            )}
          />
          <Route path="/admin" render={() => <Admin isAdmin />} />
          <Route path="/user" component={UserPage} />
          <Route component={PageNotFound} />
        </Switch>
        {/* </Router> */}
      </div>
    );
  }
}

export default App;
