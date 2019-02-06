import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import NavTags_Logged from './NavTags/NavTags_Logged';
import NavTags_Unlogged from './NavTags/NavTags_Unlogged';
import './Nav.css';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserloggedIn: false,
    };
  }

  componentDidMount() {
    let token = sessionStorage.getItem('jwtToken');
    if(!token || token === '')
      return;
    this.setState({
      UserloggedIn: true,
    })
  }

  render() {
    return (
      <nav className="display-nav wrapper">
        <div className="logo-block">
          <h3>
            <Link className="logo" to="/">conduit</Link>
          </h3>
        </div>

        {(this.state.UserloggedIn) ? <NavTags_Logged /> : <NavTags_Unlogged />}
      </nav>
    );
  }
}

export default Nav;
