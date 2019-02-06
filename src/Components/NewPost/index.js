import React, { Component } from 'react';
import './NewPost.css';

class NewPost extends Component {
  render() {
    return (
      <div className="wrapper">
        <form className="form-display">
          <div className="grid-form input-list">
            <input className="article-title-input form-input" type="text" placeholder="Article Title"/>
            <input className="article-desc-input form-input" type="text" placeholder="What's the article about"/>
            <textarea className="article-textarea article-desc-input form-input" type="text" placeholder="Write your article (in markdown)"></textarea>
            <input className="article-tag-input article-desc-input form-input" rows="50" type="text" placeholder="Enter Tags"/>
            <button type="submit" className="sign-btn">Publish Article</button>
          </div>
        </form> 
      </div>
    );
  }
}

export default NewPost;