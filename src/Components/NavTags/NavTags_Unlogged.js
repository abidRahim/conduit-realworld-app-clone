import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../Nav.css';

class NavTags_Logged extends Component {
  render() {
    return (
      <ul className="display-links">
          <NavLink
            exact
            to="/"
            activeClassName="selected"
          >
            <li className="home-tab">Home</li>
          </NavLink>
          <NavLink
            to="/signin"
            activeClassName="selected"
          >
            <li className="sign-in-tab">Sign In</li>
          </NavLink>
          <NavLink
            to="/signup"
            activeClassName="selected"
          >
            <li className="sign-up-tab">Sign Up</li>
          </NavLink>
        </ul>
    )
  }
}

export default NavTags_Logged;
