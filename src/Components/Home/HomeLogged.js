import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feed from '../Feed';
import Tags from '../Tags';
import '../Feed.css';

class HomeLogged extends Component {
  render() {
    return (
      <main className="feed-render wrapper">
        <Feed />
        <Tags />
      </main>
    );
  }
}

export default HomeLogged;