/* eslint-disable react/no-array-index-key */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { fetchUser } from '../../actions';
import Loader from '../Loader';
import FeedsArticles from '../FeedsArticles';
import './UserProfile.css';


const mapStateToProps = (state) => {
  return {
    user: state.user.userProfile,
    ownArticles: state.user.ownArticles,
    favouritedArticles: state.user.favouriteArticles,
  };
};

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.feedsTags = ['My Articles', 'Favourited Articles'];
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    const username = this.props.match.params.name;
    this.props.dispatch(fetchUser(username, (loaded) => {
      if (loaded) {
        this.setState({
          isLoading: false,
        });
      }
    }));
  }

  render() {
    const { user, favouritedArticles, ownArticles } = this.props;

    return (
      <>
        {(this.state.isLoading) ? <Loader /> : (
          <div className="profile-page">
            <div className="user-info-display">
              <div className="user-profile">
                <img className="profile-avatar" alt={user.profile.username} src={user.profile.image ? user.profile.image : 'https://static.productionready.io/images/smiley-cyrus.jpg'} />
                <h2 className="user-name">{user.profile.username}</h2>
              </div>
              <div className="follow-btn-box profile-wrapper">
                <Link to="/signup" style={{ color: 'inherit' }}>
                  <button type="button" className="follow-btn">
                    <strong>+</strong>
                      Follow
                    <span>
                      {user.profile.username}
                    </span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="profile-wrapper">
              <nav>
                <NavLink exact to="/profile/:name" activeClassName="active-tag-box" className="tag-box">My Articles</NavLink>
                <NavLink exact to="/profile/:name/favourites" activeClassName="active-tag-box" className="tag-box">Favourited Articles</NavLink>
              </nav>
              {/* {this.feedsTags.map((val, i) => {
                return <FeedsTags key={i} tag={val}/>
              }) } */}

              {favouritedArticles.map((article, index) => {
                return <FeedsArticles key={index} article={article} />;
              }) }

              {ownArticles.map((article, index) => {
                return <FeedsArticles key={index} article={article} />;
              }) }

            </div>
          </div>
        )
        }
      </>
    );
  }
}

export default connect(mapStateToProps)(UserProfile);
