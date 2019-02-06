import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSignInDetails, storeSignInDetails, fetchError, setSessionToken } from '../../actions';
import './Sign.css';

const mapStateToProps = (state) => {
  return {
    loggedUser: state.userAuth.loggedUser,
    authError: state.userAuth.error || {},
  };
};

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errorLogged: false,
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
        this.setState({
          errorLogged: true,
        });
        this.props.dispatch(fetchError(response));
      } else {
        this.props.dispatch(storeSignInDetails(response));        
        this.props.dispatch(setSessionToken());
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
        {/* {this.state.errorLogged ? <p className="error-display">{this.props.signinError.errors['email or password']}</p> : '' } */}
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
