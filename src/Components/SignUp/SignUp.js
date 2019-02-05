import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSignUpDetails } from '../../actions';
import '../SignIn/Sign.css';

const mapStateToProps = (state) => {
  return {
    userSignup: state.userAuth.signup,
  };
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      username: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmitForm(event) {
    event.preventDefault();
    const { username, email, password } = this.state;
    this.props.dispatch(fetchSignUpDetails(username, email, password));
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className="sign-wrapper">
        <div className="sign-textbox">
          <h2 className="h2-text">Sign Up</h2>
          <Link to="/signin"><p className="account-check">Have an account?</p></Link>
        </div>
        <form className="sign-form" onSubmit={(e) => { return this.onSubmitForm(e); }}>
          <div className="input-list">
            <input className="form-input" type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
            <input className="form-input" type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
            <input className="form-input" type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
          </div>
          <button type="submit" className="sign-btn">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default connect(mapStateToProps)(SignUp);
