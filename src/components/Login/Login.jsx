import React, { Component } from 'react';
import './Login.css';



class Login extends React.Component {
  render() {
    return (
      <div className="login">
        <div className="profile-pic" />
        <span>{this.props.username}</span>
        <div className="dropdown-icon" />
      </div>
    );
  }
}

export default Login;
