import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Sign.css'

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value});
  }

  render() {
    return (        
      <div className="sign-wrapper">
        <div className="sign-textbox">
          <h2 className="h2-text">Sign in</h2>
          <Link to='/signup'><p className="account-check">Need an account?</p></Link>
        </div>
        <form className="sign-form">
          <div className="input-list">
            <input className="form-input" type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
            <input className="form-input" type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
          </div>
          <button className="sign-btn">Sign In</button>
        </form>
      </div>
    )
  }
}

export default SignIn;