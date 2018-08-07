import React, { Component } from 'react';
import './Status.css';


class Status extends React.Component {
  render() {
    const { gpu, temp, miner } = this.props;

    return (
      <div className ="status">
        <div className ="status">
          <span className="miner">Miner:</span>
          <span className="coin">{this.props.miner}</span>
          <div className="dropdown-icon" /></div>
        <div className ="status">
          <span className="gpu">GPUs:</span>
          <span className="countGpu">
            {this.props.gpu}
          </span>
        </div>
        <div className ="status">
          <span>TEMP:</span>
          <span className="temp">{this.props.temp} &deg;C</span>
        </div>
      </div>
    );
  }
}

export default Status;
