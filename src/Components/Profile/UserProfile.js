import React, { Component } from 'react';
import './UserProfile.css'
import Feed from '../Feed'

class UserProfile extends Component {
  render() {
    return (
      <div className="profile-page">
        <div className="user-info-display">
          <div className="user-profile">
            <img className="profile-avatar" src={'https://static.productionready.io/images/smiley-cyrus.jpg'}/>
            <h2 className="user-name">Name</h2>
          </div>
          <div className="follow-btn-box profile-wrapper">
            <button className="follow-btn"><strong>+</strong>Follow <span> Name </span></button>
          </div>
        </div>
        <div className="profile-wrapper">
          <Feed />
        </div>
      </div>
    )
  }
}

export default UserProfile;