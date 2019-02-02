import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { SignIn, SignUp } from '../../pages';
import Header from '../Header/Header';
import * as operations from '../../redux/auth/operations';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import Home from '../../pages/Home';
import Profile from '../../pages/Profile';

class App extends Component {
  // обновляем Юзера с ЛС 
  componentDidMount() {
    this.props.refreshCurrentUser();
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
          <ProtectedRoute
            path="/profile"
            redirectTo="/signin"
            component={Profile}
          />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default connect(
  null,
  { refreshCurrentUser: operations.refreshCurrentUser }
)(App);
