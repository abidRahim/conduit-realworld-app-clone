import React, { Component } from 'react';
import './Loader2.css'

class Loader2 extends Component {
  render() {
    return (
      <>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </>
    )
  }
}

export default Loader2;