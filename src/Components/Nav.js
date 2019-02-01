import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'


class Nav extends Component {
  render() {
    return (
      <nav className="display-nav wrapper">
          <div className="logo-block">
            <h3><Link className="logo" to='/'>conduit</Link></h3>
          </div>

          <ul className="display-links">
            <Link to='/'><li className="home-tab">Home</li></Link>
            <Link to='/signin'><li className="sign-in-tab">Sign In</li></Link>
            <Link to='/signup'><li className="sign-up-tab">Sign Up</li></Link>
          </ul>
      </nav>
    )
  }
}

export default Nav;