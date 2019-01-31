import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'


class Nav extends Component {
  render() {
    return (
      <nav className="display-nav wrapper">
          <div className="logo-block">
            <h3 className="logo">conduit</h3>
          </div>

          <ul className="display-links">
            <li><Link className="home-tab">Home</Link></li>
            <li><Link className="sign-in-tab">Sign In</Link></li>
            <li><Link className="sign-up-tab">Sign Up</Link></li>
          </ul>
      </nav>
    )
  }
}

export default Nav;