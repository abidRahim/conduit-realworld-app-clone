/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import './FeedsTags.css';

class FeedsTags extends Component {
  render() {
    return (
      <li className="tag-box">
        <p>
          {this.props.tag}
        </p>
      </li>
    );
  }
}

export default FeedsTags;
