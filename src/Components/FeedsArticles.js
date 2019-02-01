import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import Taglists from './Taglists'
import './FeedsArticles.css'
import Loader from './Loader'


class FeedsArticles extends Component {
  render() {
    const {article} = this.props;
   
    const createdDate = new Date(article.createdAt)    
    const username = article.author.username.split(' ').join('');

    return (
      <>
      <article className="article-post">
        <div className="feeds-display-container">
          <div className="user-info">
            <img className="avatar" src={(article.author.image)? (article.author.image) : 'https://static.productionready.io/images/smiley-cyrus.jpg'}/>
            <div className="post-user_name">
              <Link to={`/profile/${username}`}><span className="post-name">{article.author.username}</span></Link>
              <span className="post-date">{createdDate.toDateString()}</span>
            </div>
          </div>
          <Link to='/signup'>
            <button className="favourite-btn">
              <i className="fav fas fa-heart fa-xs"></i>
              <span className="favourite-counter">{article.favoritesCount}</span>
            </button>        
          </Link>
        </div>

        <div className="post-display">
          <Link style={{ color: 'inherit'}} to={`/article/${article.slug}`}>
            <h2 className="post-title">{article.title}</h2>
            <p className="post-preview">
              {article.body}
            </p>
            <div className="article-footer">
              <small>Read more..</small>
              <ul>
              {article.tagList.map( (val, i) => {
                return <Taglists key={i} tag={val}/>
              })}
              </ul>
            </div>
          </Link>
        </div>
      </article>
      </>
    )
  }
}

export default FeedsArticles;