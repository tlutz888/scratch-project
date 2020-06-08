import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../actions/actions';
import { useDispatch } from 'react-redux';

const NavBar = props => {
  const {user, logOut} = props;
  const dispatch = useDispatch();

  return (
  <div id='nav'>
    <div id='logo'>Tracker</div>
    <NavLink to="/">
      <button type="button" id="log-out" className="button" onClick={()=> dispatch(logOut(user))}>
        Log Out
      </button>
    </NavLink>
  </div>
  );
};

export default NavBar;