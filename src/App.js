import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import StatusBar from './components/StatusBar/StatusBar.jsx'
import Header from './components/Header/Header.jsx'
import RevenueChart from './components/RevenueChart/RevenueChart.jsx'
import d3datum from './data/revenue'
import Container from './components/Container/Container.jsx'
import DashPane from './components/DashPane/DashPane.jsx'
import MinerStatus from './components/MinerStatus/MinerStatus.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Header username="Victor"/>
          <DashPane title="Status Bar">
            <StatusBar />
          </DashPane>
          <div className="two-pane-container">
            <DashPane title="Revenue" width={47.5}>
              <RevenueChart data={d3datum} todayRev="$1.45"/>
            </DashPane>
            <DashPane title="Miner Status" width={47.5}>
              <MinerStatus />
            </DashPane>
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
