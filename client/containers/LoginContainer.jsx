import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="mainSection">
        <div name = "form" id="form-log-in">
          <h1 class="site-name" id="site-name-log">Tascker</h1>
          <input id = "username" name="username" type="text" placeholder="Username" class="info"/>
          <input id = "password" name="password"  type="password" />
          <NavLink to="/user">
            <button type="button" id="log-in" class="info">Log In</button>
          </NavLink>
          <p>Forgot password?</p>
        </div>
        <div id="no-log-in">
          <spam>Don't have an account?</spam>
          <NavLink to="/user">
            <button type="button" class="white-button" id="sign-direction">Sign Up</button>
          </NavLink>
        </div>
      </section>
    );
  }
}

export default LoginContainer;