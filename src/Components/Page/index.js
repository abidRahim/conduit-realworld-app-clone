/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import './Page.css';

class Page extends Component {
  render() {
    return (
      <>
        <span className={`pagination-box ${this.props.currentPage}`} onClick={() => { return this.props.pageHandler(this.props.page); }}>
          {this.props.page}
        </span>
      </>
    );
  }
}

export default Page;
