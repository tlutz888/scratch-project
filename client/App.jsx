import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import MainContainer from './containers/MainContainer';
import LoginContainer from './containers/LoginContainer';
import SignUpContainer from './containers/SignUpContainer';

import './stylesheets/styles.css';

const App = (props) => {
  return (
    <div className="router">
      <main>
        <Switch>
          <Route exact path="/" component={MainContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/signup" component={SignUpContainer} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
