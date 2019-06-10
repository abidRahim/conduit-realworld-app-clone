/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */
/* eslint-disable consistent-return */
import React, { Component } from 'react';
import './Article.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from '../Loader';
import { fetchCurrentArticle } from '../../actions';
import Comments from '../Comments/Comments';
import TagLists from '../Taglists';

const mapStateToProps = (state) => {
  if (Object.keys(state.article).length) {
    const { currentArticle, articleComments } = state.article;
    return {
      article: currentArticle || {},
      comments: articleComments.comments || {},
    };
  }
};

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const { slug } = this.props.match.params;

    this.props.dispatch(fetchCurrentArticle(slug, (loaded) => {
      if (loaded) {
        this.setState({
          isLoading: false,
        });
      }
    }));
  }

  render() {
    const { article, comments } = this.props;
    // const displayDate = new Date(article.createdAt);
    // console.log(article.createdAt);
    // console.log(article.createdAt, "41");
    return (
      <>
        {
          this.state.isLoading ? <Loader /> : (
            <div>
              <div className="article-header wrapper">
                <div className="article-title">
                  {article.title}
                </div>
                <div className="user-meta">
                  <div className="user-info">
                    <img className="avatar" alt={article.author.username} src={(article.author.image) ? (article.author.image) : 'https://static.productionready.io/images/smiley-cyrus.jpg'} />
                    <div className="post-user_name">
                      <Link to={`/profile/${article.author.username}`}><span className="post-name">{article.author.username}</span></Link>
                      {/* <span className="post-date">{displayDate.toDateString()}</span> */}
                    </div>
                  </div>
                  <div className="follow-btn-box ">
                    <Link to="/signup">
                      <button type="button" className="follow-btn flw-btn">
                        <strong>+</strong>
                          Follow
                        <span>
                          {article.author.username}
                        </span>
                      </button>
                    </Link>
                  </div>
                  <div className="follow-btn-box">
                    <Link to="/signup">
                      <button type="button" className="follow-btn fav-btn">
                        <i className="fav fas fa-heart fa-xs" />
                          Favourite
                        <span>
                          {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                          Article ({article.favoritesCount})
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="article-body wrapper">
                <p>{article.body}</p>
              </div>
              <div className="wrapper">
                {article.tagList.map((tag, index) => {
                  return <TagLists key={index} tag={tag} />;
                }) }
              </div>
              <div className="hr wrapper" />
              <div className="footer-user-meta wrapper">
                <div className="user-meta">
                  <div className="user-info">
                    <img className="avatar" alt={article.author.username} src={(article.author.image) ? (article.author.image) : 'https://static.productionready.io/images/smiley-cyrus.jpg'} />
                    <div className="post-user_name">
                      <Link to={`/profile/${article.author.username}`}><span className="post-name">{article.author.username}</span></Link>
                      {/* <span className="post-date">{displayDate.toDateString()}</span> */}
                    </div>
                  </div>
                  <div className="follow-btn-box ">
                    <Link to="/signup">
                      <button type="button" className="follow-btn flw-btn">
                        <strong>+</strong>
                          Follow
                        <span>
                          {article.author.username}
                        </span>
                      </button>
                    </Link>
                  </div>
                  <div className="follow-btn-box">
                    <Link to="/signup">
                      <button type="button" className="follow-btn fav-btn">
                        <i className="fav fas fa-heart fa-xs" />
                          Favourite
                        <span>
                          Article(
                          {article.favoritesCount}
                          )
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="footer-user-meta">
                <p>
                  <Link to="/signin" className="link-text">Sign in</Link>
                  or
                  <Link to="/signup" className="link-text">Sign up</Link>
                  to add comments on this article.
                </p>
              </div>
            </div>
          )
        }
        { comments && comments.map((comment, index) => {
          return <Comments key={index} comment={comment} />;
        })
        }
      </>
    );
  }
}

export default connect(mapStateToProps)(Article);
