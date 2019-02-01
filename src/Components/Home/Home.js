import React, { Component } from 'react';
import './Home.css';
import Hero from '../Hero';
import Feed from '../Feed';
import Tags from '../Tags';
import Loader from '../Loader'

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