/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import HomeLogged from './Components/Home/HomeLogged';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import UserProfile from './Components/Profile/UserProfile';
import UserProfileLogged from './Components/Profile/UserProfileLogged';
import Nav from './Components/Nav';
import Article from './Components/Article/Article';
import Favourites from './Components/Favourites';
import NewPost from './Components/NewPost';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <BrowserRouter className="appplication">
        <>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/profile/home" component={HomeLogged} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <Route path="/profile/:name" component={UserProfile} />
            <Route path="/profile/profile" component={UserProfileLogged} />
            <Route path="/profile/:name/favourites" component={Favourites} />
            <Route path="/article/:slug" component={Article} />
            <Route path="/newpost" component={NewPost} />
          </Switch>
        </>
      </BrowserRouter>

    );
  }
}

export default App;
