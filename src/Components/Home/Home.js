/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { Component } from 'react';
import './Home.css';
import Hero from '../Hero';
import Feed from '../Feed';
import Tags from '../Tags';

class Home extends Component {
  render() {
    return (
      <div className="appplication">
        <Hero />
        <main className="feed-render wrapper">
          <Feed />
          <Tags />
        </main>
      </div>
    );
  }
}

export default Home;
