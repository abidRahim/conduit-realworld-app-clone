import React, { Component } from 'react';
import './Feed.css'
import FeedsTags from './FeedsTags';
import FeedsArticles from './FeedsArticles';


class Feed extends Component {
  render() {
    return (
      <section className="feed-container">
        <ul>
          <FeedsTags />
        </ul>
        <FeedsArticles />
        <FeedsArticles />
        
        {/* <FeedsArticles />
        <FeedsArticles />
        <FeedsArticles /> */}

      </section>
    )
  }
}

export default Feed;