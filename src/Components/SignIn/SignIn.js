import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSignInDetails, storeSignInDetails } from '../../actions';
import './Sign.css';

const mapStateToProps = (state) => {
  return {
    userSignin: state.userAuth.signin,
  };
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.dispatch(fetchSignInDetails(email, password, (response) => {
      if (response.status !== 200) {
        //dispay sign in failure action
        console.log(response.status);
      } else {
        this.props.dispatch(storeSignInDetails(response));
        sessionStorage.setItem('jwtToken', response.json().user.token);
      }
    }));
  }

  render() {
    return (
      <div className="sign-wrapper">
        <div className="sign-textbox">
          <h2 className="h2-text">Sign in</h2>
          <Link to="/signup"><p className="account-check">Need an account?</p></Link>
        </div>
        <form className="sign-form" onSubmit={(e) => { return this.handleSubmit(e); }}>
          <div className="input-list">
            <input className="form-input" type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
            <input className="form-input" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
          </div>
          <button type="submit" className="sign-btn">Sign In</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SignIn);
