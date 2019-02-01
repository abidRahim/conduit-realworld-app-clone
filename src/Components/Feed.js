import React, { Component } from 'react';
import './Feed.css'
import FeedsTags from './FeedsTags';
import * as actions from '../actions';
import { connect } from 'react-redux';
import FeedsArticles from './FeedsArticles';
import Loader from './Loader'

const mapStateToProps = (state) => {
  return {
    articles: state.data,
  }
}
class Feed extends Component {
  constructor(props) {
    super(props);
    this.feedsTags = ['Global Feeds'];
  }
  componentDidMount = () => {
    this.props.dispatch(actions.fecthArticles());
  }

  render() {
    return (
      <section className="feed-container">
        <ul>
          {this.feedsTags.map( (val, i) => {
            return <FeedsTags key={i} tag={val}/>
          }) }
        </ul>
        {this.props.articles.map( (val) => {
          return <FeedsArticles key={val.slug} article={val}/>
        }) }
      </section>
      
    )
  }
}

export default connect(mapStateToProps)(Feed);