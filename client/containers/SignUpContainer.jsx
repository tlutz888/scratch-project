import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signUp } from '../actions/actions';

const mapDispatchToProps = (dispatch) => ({
  // create functions that will dispatch action creators
  signUp: (user) => {
    dispatch(actions.signUp(user));
  },
});

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
  }
  // need to finish
  // on login fetch to get data from database
  fetchSignUp() {
    const body = {
      name, 
      password,
    }
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        "Content-Type": "Application/JSON"
      },
    body: JSON.stringify(body)
    })
    .then(resp => {
      console.log('resp', resp)
      return resp.json()
    })
    .then(data => {
      console.log('data', data)
      return data
    })
    .catch(err => console.log('CreateUser fetch /api/create: ERROR: ', err));
  }

  render() {
    return (
      <section className="mainSection">
        <div id="form">
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
            <button type="button" id="log-in" onClick={this.fetchSignUp}>
              Sign Up
            </button>
          </NavLink>
        </div>
        <div id="no-log-in">
          <span>Already have an account?</span>
          <NavLink to="/">
            <button type="button" id="sign-up" onClick={this.fetchSignUp}>
              Sign Up
            </button>
          </NavLink>
        </div>
      </section>
    );
  }
}

export default connect(null, mapDispatchToProps)(SignUpContainer);
