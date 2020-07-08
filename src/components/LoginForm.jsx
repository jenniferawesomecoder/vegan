import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    error: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleLogin(this.state).then((response) => {
      if (response.error) {
        this.setState({ error: "username or password invalid" })
      } else {
        this.setState({ error: "" })
      }

      return response
    })

  }

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSubmit}>
        <img className="login-logo-image" src="https://i.imgur.com/IoEQE0G.png" alt="verdure logo" />
        <div className="sign-in-main">
          <div className="sign-in-header">
            <h2>Welcome Back</h2>
          </div>
          <div className="sign-in-grid">
          <p>{this.state.error}</p>
            <div className="sign-in-input-div">
              <label htmlFor="username">Username</label>
              <input
                className="sign-in-input"
                placeholder="Username"
                name="username"
                id="username"
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="sign-in-input-div">
              <label htmlFor="password">Password</label>
              <input
                className="sign-in-input"
                placeholder="Password"
                name="password"
                id="password"
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </div>
            <div>
              <button id="submit">SIGN IN</button>
            </div>
            <div className="sign-in-lower-grid">
              <p>Don't have an account?</p>
              <Link to='/register'>
                <p id="register-link">SIGN UP NOW</p>
              </Link>
            </div>
          </div>
        </div>
      </form>
    )
  }
}
