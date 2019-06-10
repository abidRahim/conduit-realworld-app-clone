import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, Switch, Route } from 'react-router-dom';
import FeedsArticles from '../FeedsArticles';
import './UserArticles.css';


const mapStateToProps = (state) => {
  return {
    ownArticles: state.user.ownArticles || {},
    favouritedArticles: state.user.favouriteArticles || {},
  }
}
class UserArticles extends Component {
 
  favouritedArticles() {
    if(this.props.favouritedArticles)
    {
      return this.props.favouritedArticles.map((article, index) => {
        return <FeedsArticles key={index} article={article} />;
      });
    }
  }

  ownArticles() {
    if(!this.props.ownArticles) return;
    return this.props.ownArticles.map((article, index) => {
      return <FeedsArticles key={index} article={article} />;
    });
  }

  
  render() {
    const { username } = this.props;
    // { if (/favourites/.test(location.pathname)) {
    //   this.favouritedArticles();
    // } else {
    //   this.ownArticles();
    // } }
    return (
      <nav>
        <NavLink exact to={`/profile/${username}`} activeClassName="active-tag-box" className="tag-box">My Articles</NavLink>
        <NavLink exact to={`/profile/${username}/favourites`} activeClassName="active-tag-box" className="tag-box">Favourited Articles</NavLink>
        
        <Switch>
          <Route exact path={`/profile/${username}`} render={() => this.ownArticles()} />
          <Route exact path={`/profile/${username}/favourites`} render={() => this.favouritedArticles()} />
        </Switch>
      </nav>      
    );
  } 

}

export default connect(mapStateToProps)(UserArticles);

