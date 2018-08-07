import React, { Component } from 'react';
import './DashPane.css'

class DashPane extends React.Component {
  render() {
    const styles = {
      width: this.props.width + "%",
    }


    return(
      <div className="dash-pane" style = {styles}>
        <h2 className="h5">{this.props.title}</h2>
        <section className="dash-pane-section">{this.props.children}</section>
      </div>
    );
  }
}

export default DashPane;
