/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Tags.css';
import TagName from './TagName';
import * as actions from '../actions';
import Loader2 from './Loader/Loader2';

const mapStateToProps = (state) => {
  return {
    tags: state.tags,
  };
};

class Tags extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchTags());
  }

  render() {
    return (
      <aside className="tags-container">
        <h3 className="h3-text">Popular Tags</h3>
        {(this.props.tags.length > 0) ? (this.props.tags.map((val, index) => {
          return <TagName key={index} tag={val} />;
        })) : <Loader2 /> }
      </aside>
    );
  }
}

export default connect(mapStateToProps)(Tags);
