import React, {Component} from 'react';
import './Taglists.css'

class Taglists extends Component {
  render() {
    return (
      <>
        <li className="tag-btn">
          {this.props.tag}
        </li>
      </>
    )
  }
}

export default Taglists;