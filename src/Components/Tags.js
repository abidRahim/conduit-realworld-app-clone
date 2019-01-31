import React, { Component } from 'react';
import './Tags.css'
import TagName from './TagName';

class Tags extends Component {
  render() {
    return (
      <aside className="tags-container">
        <h3 className="h3-text">Popular Tags</h3>
        <TagName />
        <TagName />
        <TagName />
        <TagName />
        <TagName />
        <TagName />
        <TagName />
        <TagName />
        <TagName />
        <TagName />
      </aside>
    )
  }
}

export default Tags;