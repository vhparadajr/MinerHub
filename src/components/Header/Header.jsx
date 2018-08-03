import React, { Component } from 'react';
import './Header.css';
import Logo from '../Logo/Logo.jsx'
import Login from '../Login/Login.jsx'

class Header extends React.Component {
  render() {
    return (
      <header className="site-header">
        <Logo />
        <Login username={this.props.username} />
      </header>
    );
  }
}

export default Header;
