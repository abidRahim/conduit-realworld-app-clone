import React, { Component } from 'react'
import './Page.css'

class Page extends Component {
  render() {
    return(
      <>
        <span className="pagination-box" onClick={() => this.props.pageHandler(this.props.page)}>{this.props.page}</span>
      </>
    )
  }
}

export default Page;