import React, { Component } from 'react';
import './Home.css';
import Nav from '../Nav';
import Hero from '../Hero';
import Feed from '../Feed';
import Tags from '../Tags';

class Home extends Component {
  render() {
    return (
      <div className="appplication">
        <Nav />
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