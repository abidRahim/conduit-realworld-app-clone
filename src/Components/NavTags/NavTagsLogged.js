import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Nav.css';

class NavTagsUnlogged extends Component {
  render() {
    return (
      <ul className="display-links">
          <NavLink
            exact
            to="/profile/home"
            activeClassName="selected"
          >
            <li className="home-tab">Home</li>
          </NavLink>
          <NavLink
            to="/newpost"
            activeClassName="selected"
          >
            <div className="flex-it">
              <i class="far fa-edit"></i>
              <li className="sign-in-tab">New Post</li>
            </div>
          </NavLink>
          <NavLink
            to="/settings"
            activeClassName="selected"
          > 
            <div className="flex-it">
              <i class="fas fa-cog"></i>
              <li className="sign-up-tab">Settings</li>
            </div>
          </NavLink>
          <NavLink
            to="/profile/profile"
            activeClassName="selected"
          >
            <li className="sign-up-tab">User Name</li>
          </NavLink>
        </ul>
    )
  }
}

export default NavTagsUnlogged;
