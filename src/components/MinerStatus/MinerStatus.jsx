import React, { Component } from 'react';
import './MinerStatus.css';


class MinerStatus extends React.Component {
  render() {
    const { hashrate, accepted, pool, uptime} = this.props;

    return (
      <div className='hash'>
        <div className='one'>
          <span className="block">{this.props.accepted}</span>
          <span>{this.props.rejected}</span>
        </div>
        <div className='two'>
          <span className="spanMargin">Hashrate: {this.props.hashrate}</span>
        </div>
        <div className='three'>
          <span className="spanPool">Pool: {this.props.pool}</span>
        </div>
        <div className='four'>
          <span className="spanMargin">Uptime: {this.props.uptime}</span>
        </div>
      </div>
    );
  }
}

export default MinerStatus


// hashrate, pool, worker, , rejected, uptime
