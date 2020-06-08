import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { signUp } from '../actions/actions';
import { useDispatch } from 'react-redux';

const SignUpContainer = props => {
  const dispatch = useDispatch();

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
 // **************need real data, need to uncomment line 37 and delete 42-45 *************

 const fetchSignUp = () => {
    // const reqData = { 
    //   username: fields.username,
    //   password: fields.password,
    //   project: 'Not specified',
    // }
    // fetch('/api/', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(reqData)})
      // .then((res) => {
      //   // return res.json();
      // })
      // .then((data) => {
        // dummy data for test
        const data = {
          Users: {
            user_id: 1,
            account_name: 'tom',
        },
          Projects: [{
            project_id: 1,
            title: 'Not specified',
          }],
          Category: [{
            category_id: 1,
            title: 'Coding',
          }, {
            category_id: 2,
            title: 'Debug',
          }, {
            category_id: 3,
            title: 'Meetings',
          }, {
            category_id: 4,
            title: 'QA',
          }, {
            category_id: 5,
            title: 'Code Review',
          }, {
            category_id: 6,
            title: 'Reasearch',
          }, {
            category_id: 7,
            title: 'Write Documentation',
          }, {
            category_id: 7,
            title: 'Other',
          }],
        }
        const payload = {};
        payload.user = data.Users;
        payload.projects = data.Project;
        payload.categories = data.Category;
      //   return payload;
      // })
      // .then((payload)=> 
      dispatch(signIn(payload))
      // )
      // .catch((err) => console.log('Sign in post info: ERROR: ', err));
  }

    return (
      <div id="mainDiv">  
      <div id='nav'>
        <div id='logo'>Tracker</div>
          <a>
            <button type="button" id="log-out" className="button">
              Log Out
            </button>
          </a>
        </div>
        <div id="form">
          <h1 className="site-name" id="site-name-log">
            Sign in
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
            <button type="button" id="log-in" className="button" onClick={fetchSignUp}>
              Sign Up
            </button>
          </NavLink>
          <p>Sign in with <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png" height="20px"/> <img src="https://image.flaticon.com/icons/svg/25/25231.svg" width="25px" height="25px"/></p>
        </div>
        <div id="no-log-in">
          <div id="forgot">Already have an account?</div>
          <NavLink to="/">
            <button type="button" id="sign-up" className="button">
              Sign In
            </button>
          </NavLink>
        </div>
      </div>
    );
}

export default SignUpContainer;
