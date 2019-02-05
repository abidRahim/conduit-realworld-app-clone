import React, { Component } from 'react';
import './TagName.css';

class TagName extends Component {
  render() {
    return (
      <div className="tag-button">{this.props.tag}</div>
    );
  }
}

export default TagName;
