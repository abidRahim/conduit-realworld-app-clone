import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import './FeedsArticles.css'

class FeedsArticles extends Component {
  render() {
    return (
      <article className="article-post">

      <div className="feeds-display-container">
        <div className="user-info">
          <img className="avatar" src={'https://static.productionready.io/images/smiley-cyrus.jpg'}/>
          
          <div className="post-user_name">
            <span className="post-name">NAME</span>
            <span className="post-date">January 30, 2019</span>
          </div>
        </div>
        <button className="favourite-btn">
          <i className="fav fas fa-heart fa-xs"></i>
          <span className="favourite-counter">0</span>
        </button>        
      </div>

      <div className="post-display">
        <h2 className="post-title">New Post Title</h2>
        <p className="post-preview">
          This Post is new.
        </p>
        <small>Read more..</small>
      </div>
      </article>
    )
  }
}

export default FeedsArticles;