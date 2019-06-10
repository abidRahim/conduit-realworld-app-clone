import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
  render() {
    return (
      <div className="hero wrapper">
        <h1 className="banner-tag">Mediume Blog</h1>
        <p className="banner-text">A place to share your knowledge</p>
      </div>
    );
  }
}

export default Hero;
