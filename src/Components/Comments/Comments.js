import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Comments.css';

class Comments extends Component {
  render() {
    const { comment } = this.props;
    const displayDate = new Date(comment.createdAt);

    return (
      <div className="comment-wrapper">
        <div className="comment-body">
          <p>{comment.body}</p>
        </div>
        <div className="comment-user-info">
          <img className="avatar size-sm" alt={comment.author.username} src={(comment.author.image) ? (comment.author.image) : 'https://static.productionready.io/images/smiley-cyrus.jpg'} />
          <Link to={`/profile/${comment.author.username}`}><span className="post-name comment-name">{comment.author.username}</span></Link>
          <span className="post-date comment-date">{displayDate.toDateString()}</span>
        </div>
      </div>
    );
  }
}

export default Comments;
