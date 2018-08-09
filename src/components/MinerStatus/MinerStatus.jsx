import React, { Component } from 'react';
import './MinerStatus.css';
import axios from 'axios'





class MinerStatus extends React.Component {
  state = {
    hashrate: 0,
    pool: 0,
    worker: '',
    accepted: 0,
    rejected: 0,
    uptime: 0,
    error: false,
  };

  async componentDidMount() {
    const apiURL = "http://192.168.1.116:17790/api/miners/5"
    const apiKey = "?key=0d6af9fca12f4c3188c836c79e39403c";

    try {
      const response = await axios.get(apiURL + apiKey);
      // const gpu = response.data.gpuCount;
      // const temp = response.data.coinList[0].temperature;
      console.log(response)
      console.log('Accepted', response.data.progressInfo.line1)
      // this.setState({ gpu, temp });
    } catch (error) {
      console.log('something went wrong', error);
      this.setState({ error: true });
    }
  }


  render() {
    return (
      <div className="hash">
        <span>{this.props.username}</span>
      </div>
    );
  }
}

export default MinerStatus;
