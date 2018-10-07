import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './components/pages/LoginPage';
import AdminPage from './components/pages/AdminPage';
import UserPage from './components/pages/UserPage';
import { auth } from './components/pages/mock/fakeAuth';

class App extends Component {
  state = {
    user: null,
    errorMsg: ''
  }

  onAuth = ( login, pass ) => {
    auth( login, pass ).then( userData => this.setState( {
      user: userData
    } ) ).catch( errorMsg => this.setState( {
      errorMsg: errorMsg.errorAuthMsg
    } ) )
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={LoginPage}/>
            <Route path="/admin" render = {() => <AdminPage isAdmin />} />
            <Route path="/user" component={UserPage}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
