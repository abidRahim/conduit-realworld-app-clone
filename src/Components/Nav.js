import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <nav className="display-nav wrapper">
        <div className="logo-block">
          <h3>
            <Link className="logo" to="/">conduit</Link>
          </h3>
        </div>

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
      </nav>
    );
  }
}

export default Nav;
