import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home/Home'
import UserProfile from './Components/Profile/UserProfile';

class App extends Component {
  render() {
    return (
      <div className="appplication">
        <Home />
        {/* <UserProfile /> */}
      </div>

    );
  }
}

export default App;