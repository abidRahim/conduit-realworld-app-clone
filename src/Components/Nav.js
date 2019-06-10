import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavTagsLogged from './NavTags/NavTagsLogged';
import NavTagsUnlogged from './NavTags/NavTagsUnlogged';
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

        {(this.state.UserloggedIn) ? <NavTagsLogged /> : <NavTagsUnlogged />}
      </nav>
    )
  }
}
export default Nav;
