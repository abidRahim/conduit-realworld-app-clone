import React, {Component} from 'react';
import './Loader.css'

class Loader extends Component {
  render() {
    return (
      <div className="loader-wrapper">
        <div className="loader">
          <div className="roller"></div>
          <div className="roller"></div>
        </div>
        
        <div id="loader2" className="loader">
          <div className="roller"></div>
          <div className="roller"></div>
        </div>
        
        <div id="loader3" className="loader">
          <div className="roller"></div>
          <div className="roller"></div>
        </div>
      </div>
    )
  }
}

export default Loader;