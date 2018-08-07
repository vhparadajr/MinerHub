import React, { Component } from 'react';
import './Container.css'


class Container extends React.Component {
  render(){
    return (
      <div className="container">{this.props.children}</div>
    )
  }

}
 export default Container;
