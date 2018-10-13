import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import Login from './pages/Login';
import Admin from './pages/Admin';
import UserPage from './pages/User';
import auth from '../components/mock/fakeAuth';
// import Button from './shared/Button';
import ModalTile from './shared/ModalTile';

class App extends Component {
  state = {
    user: null,
    errorMsg: '',
    isModalActive: false,
    userName: '',
    password: '',
    confirmPassword: '',
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

  render() {
    const { userName, password, confirmPassword, isModalActive } = this.state;
    return (
      <div className="App">
        {isModalActive && <ModalTile />}
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  userName={userName}
                  password={password}
                  confirmPassword={confirmPassword}
                  handleInputChange={this.handleInputChange}
                />
              )}
            />
            <Route path="/signin" component={Signin} />
            <Route path="/login" component={Login} />
            <Route path="/admin" render={() => <Admin isAdmin />} />
            <Route path="/user" component={UserPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
