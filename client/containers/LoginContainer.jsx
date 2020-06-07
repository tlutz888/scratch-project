import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { login } from '../actions/actions';
import { useDispatch } from 'react-redux';


const LoginContainer = props => {
  // hook in place of mapDispatchToProps
  const dispatch = useDispatch();
  // useState hook to hold form data
  const [fields, setFields] = useState({
    username: '',
    password: '',
  });

  const handleClick = (e) => {
    const targetName = e.target.name;
    const value = e.target.value;
    setFields({
      ...fields,
      [targetName]: value
    })
  }


  // **************need real data, need to uncomment line 41 and delete 44-49 *************
  const fetchLogin = () => {
    // object to send in fetch request
    const reqData = { 
      username: fields.username,
      password: fields.password
    }
    fetch('/api/', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(reqData)})
      .then((res) => {
        // return res.json();
      })
      .then((data) => {
        // dummy data for test
        data = {
          user: {username: 'tom'},
          projects: [{id: 1}, {id: 3}],
          categories: [{coding: 1}, {debug: 2}]
        }
        const payload = {};
        payload.user = data.user;
        payload.projects = data.projects;
        payload.categories = data.categories;
        return payload;
      })
      .then((payload)=> dispatch(login(payload)))
      .catch((err) => console.log('Login get login: ERROR: ', err));
  }
  
  
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
          value={fields.username}
          onChange={handleClick}
        />
        <input 
        id="password" 
        name="password" 
        type="password" 
        placeholder="Password"
        value={fields.password}
        onChange={handleClick}
        />
        <NavLink to="/user">
          <button onClick={fetchLogin} type="button" id="log-in">
            Log In
          </button>
        </NavLink>
        <p>Forgot password?</p>
      </div>
      <div id="no-log-in">
        <span>Don't have an account?</span>
        <NavLink to="/user">
          <button type="button" id="sign-up" onClick={()=> console.log('*** need to add signup link functionality? ***logincontainer line 91')}>
            Sign Up
          </button>
        </NavLink>
      </div>
    </section>
  );
  
}

export default LoginContainer;

// export default connect(null, mapDispatchToProps)(LoginContainer);
