import React, { Component } from 'react';
import './StatusBar.css';
import Status from '../Status/Status.jsx'
import axios from 'axios'

const apiKey = "?key=0d6af9fca12f4c3188c836c79e39403c";
const stopAction = "&action=stop";
const startAction = "&action=start";
const restartAction = "&action=restart";
const id = 5;

class StatusBar extends React.Component {
  state = {
    gpu: 0,
    temp: 0,
    miner: 'ETH',
    error: false,
  };

  handleClick = async (event) => {
    const apiURL = "http://192.168.1.116:17790/api/miners/5"
    const name = event.target.name;
    let response;

    if (name === 'start') {
      response = await axios.post(apiURL + apiKey + startAction);
    } else if (name === 'stop') {
      response = await axios.post(apiURL + apiKey + stopAction);
    } else {
      response = await axios.post(apiURL + apiKey + restartAction);
    }
  }

  async fetchData(){
    const apiURL = "http://192.168.1.116:17790/api/summary";

    try {
      const response = await axios.get(apiURL + apiKey);
      const gpu = response.data.gpuCount;
      const temp = response.data.coinList[0].temperature;
      this.setState({ gpu, temp });
    } catch (error) {
      console.log('something went wrong', error);
      this.setState({ error: true });
    }
  }


  componentDidMount() {
    this.interv =setInterval(() => this.fetchData(), 5000)
    this.fetchData()
  }
  componentWillUnmount(){
    clearInterval(this.interv)
  }




  render() {
    const offState = (
      <p>The miner might be stopped. Try clicking Start.</p>
    );
    const onState = (
      <Status
        gpu={this.state.gpu}
        temp={this.state.temp}
        miner={this.state.miner}
      />
    );

    return (
      <div className="statusBar">
        {this.state.error ? offState : onState}
        <div className="status">
          <button className="button1" onClick={this.handleClick} name="start">Start</button>
          <button className="button1" onClick={this.handleClick} name="stop">Stop</button>
          <button className="button2" onClick={this.handleClick}>Restart</button>
        </div>
      </div>
    );
  }
}

export default StatusBar;
