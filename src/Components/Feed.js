import React, { Component } from 'react';
import './Feed.css'
import FeedsTags from './FeedsTags';
import * as actions from '../actions';
import { connect } from 'react-redux';
import FeedsArticles from './FeedsArticles';
import Loader from './Loader'
import Loader2 from './Loader/Loader2'
import Page from '../Components/Page'

const mapStateToProps = (state) => {
  return {
    articles: state.data,
  }
}
class Feed extends Component {
  constructor(props) {
    super(props);
    this.feedsTags = ['Global Feeds'];
    this.pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    this.state = {
      isLoading: true,
      page: 0
    }
  }
  componentDidMount = () => {
    this.fetchDispatcher(this.state.page)
  }

  pageHandler = (page) => {
    this.setState({
      isLoading: true,
      page
    },
      this.fetchDispatcher(this.state.page)
    )
  }

  fetchDispatcher = (currentPage) => {
    this.props.dispatch(actions.fecthArticles(currentPage, (loaded) => {
      if(loaded) {
        this.setState({
          isLoading: false
        })
      }
    }) )
  }

  render() {
    return (
      <section className="feed-container">
        <ul>
          {this.feedsTags.map( (val, i) => {
            return <FeedsTags key={i} tag={val}/>
          }) }
        </ul>
        { (this.state.isLoading) ?
          <Loader2 />
          :
          (this.props.articles.map( (val) => {
            return <FeedsArticles key={val.slug} article={val}/>
          }))
        }
        <div className="pagination-container">
          { 
            this.pages.map( (page, index) => {
              return <Page key={index} page={page} pageHandler={this.pageHandler} />
            })
          }
        </div>

      </section>
      
    )
  }
}

export default connect(mapStateToProps)(Feed);