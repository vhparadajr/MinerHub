import React, { Component } from 'react';
import './DashPane.css'
import axios from 'axios'
import MinerStatus from '../MinerStatus/MinerStatus.jsx'
import RevenueChart from '../RevenueChart/RevenueChart.jsx'


class DashPane extends React.Component {
  state = {
    hashrate: 0,
    pool: '',
    accepted: '',
    rejected: '',
    uptime: '',
  };

  async fetchData(){
    const apiURL = 'http://192.168.1.116:17790/api/miners/5'
    const apiKey = '?key=0d6af9fca12f4c3188c836c79e39403c';

    try {
      const response = await axios.get(apiURL + apiKey);
      const accepted = response.data.progressInfo.line1
      const rejected = response.data.progressInfo.line2
      const hashrate = response.data.speedInfo.avgHashrate
      const pool = response.data.pool
      const uptime = response.data.statusInfo.statusLine3
      this.setState({ hashrate, accepted, pool, rejected, uptime });
    } catch (error) {
      console.log('something went wrong', error);
      this.setState({ error: true });
    }
  }

  componentDidMount() {
    this.interv = setInterval(() => this.fetchData(), 5000)
    this.fetchData()
  }
  componentWillUnmount(){
    clearInterval(this.interv)
  }




  render() {
    const styles = {
      width: this.props.width + "%",
    }
    const offState = (
      <p>The miner might be stopped. Try clicking Start.</p>
    );

    const onState =(
      <MinerStatus
        hashrate={this.state.hashrate}
        accepted={this.state.accepted}
        pool={this.state.pool}
        rejected={this.state.rejected}
        uptime={this.state.uptime}
      />
    )




    return(
      <div className="dash-pane" style = {styles}>
        <h2 className="h5">{this.props.title}</h2>
        <section className="dash-pane-section">
          {this.props.children}
          {this.state.error ? offState : onState}
        </section>
      </div>
    );
  }
}

export default DashPane;
