import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  // create functions that will dispatch action creators
  login: (event) => {
    event.preventDefault();
    dispatch(actions.login());
  },
});

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }
  // need to finish
  // on login fetch to get data from database
  fetchLogin() {
    fetch('/api/')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // invoke login reducer
        login(data);
      })
      .catch((err) => console.log('Login get login: ERROR: ', err));
  }

  render() {
    return (
      <section className="mainSection">
        <div name="form" id="form-log-in">
          <h1 className="site-name" id="site-name-log">
            Tracker
          </h1>
          <input
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            className="info"
          />
          <input id="password" name="password" type="password" />
          <NavLink to="/user">
            <button type="button" id="log-in">
              Log In
            </button>
          </NavLink>
          <p>Forgot password?</p>
        </div>
        <div id="no-log-in">
          <span>Don't have an account?</span>
          <NavLink to="/user">
            <button type="button" id="sign-up" onClick={this.fetchLogin}>
              Sign Up
            </button>
          </NavLink>
        </div>
      </section>
    );
  }
}

export default connect(null, mapDispatchToProps)(LoginContainer);
