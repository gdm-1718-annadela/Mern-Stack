import React, { Component } from 'react';

class LoginPage extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Sign in</h1>
        <form className={'sign-in-form'}>
          <label htmlFor="email">Email</label>
          <input type="email" />
          <label htmlFor="password">Password</label>
          <input type="password" />
          <button type="submit">Sign In</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LoginPage;