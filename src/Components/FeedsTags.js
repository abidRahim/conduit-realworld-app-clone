import React, { Component } from 'react';
import './FeedsTags.css'

class FeedsTags extends Component {
  render() {
    return(
      <li className="tag-box"><a>{this.props.tag}</a></li>
    )
  }
}

export default FeedsTags;
