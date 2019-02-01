import React, { Component } from 'react';
import './Tags.css'
import TagName from './TagName';
import { connect } from 'react-redux';
import * as actions from '../actions';

const mapStateToProps = (state) => {
  return { 
    tags: state.tags
  };
}

class Tags extends Component {
  componentDidMount = () => {
    this.props.dispatch(actions.fetchTags())
  }

  render() {
    return (
      <aside className="tags-container">
        <h3 className="h3-text">Popular Tags</h3>
        {this.props.tags.map( (val, index) => {
          return <TagName key={index} tag={val}/>
        })
        }
      </aside>
    )
  }
}

export default connect(mapStateToProps)(Tags);