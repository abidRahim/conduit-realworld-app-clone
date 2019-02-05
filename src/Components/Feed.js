/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Feed.css';
import FeedsTags from './FeedsTags';
import * as actions from '../actions';
import FeedsArticles from './FeedsArticles';
import Loader2 from './Loader/Loader2';
import Page from './Page';

const mapStateToProps = (state) => {
  return {
    articles: state.data,
  };
};

class Feed extends Component {
  constructor(props) {
    super(props);
    this.feedsTags = ['Global Feeds'];
    this.pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    this.state = {
      isLoading: true,
      page: 0,
    };
    this.pageHandler = this.pageHandler.bind(this);
  }

  componentDidMount() {
    this.fetchDispatcher(this.state.page);
  }

  fetchDispatcher(currentPage) {
    this.props.dispatch(actions.fecthArticles(currentPage, (loaded) => {
      if (loaded) {
        this.setState({
          isLoading: false,
        });
      }
    }));
  }

  pageHandler(page) {
    this.setState({
      isLoading: true,
      page,
    },
    () => { return this.fetchDispatcher(page); });
  }

  render() {
    return (
      <section className="feed-container">
        <ul>
          {this.feedsTags.map((val, i) => {
            return <FeedsTags key={i} tag={val} />;
          }) }
        </ul>
        { (this.state.isLoading) ? <Loader2 /> : (this.props.articles.map((val) => {
          return <FeedsArticles key={val.slug} article={val} />;
        }))
        }
        <div className="pagination-container">
          { this.pages.map((page, index) => {
            return <Page key={index} page={page} currentPage={(this.state.page - 1) === index ? 'active' : ''} pageHandler={this.pageHandler} />;
          }) }
        </div>
      </section>
    );
  }
}

export default connect(mapStateToProps)(Feed);
