import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StatusBar from './components/StatusBar/StatusBar.jsx'
import Header from './components/Header/Header.jsx'



// class MinerService {
//   async get() {
//     const response = await axios.get('.../api/v2/miner');

//     return response.data;
//   }
// }
//********************** STATUS BAR **************************//
// class Buttons extends React.Component {
//   render() {
//     return (
//       <div className="status">
//         <button className="button1" type="button" name="button">Start/Stop</button>
//         <button className="button2" type="button" name="button">Reset</button>
//       </div>
//     );
//   }
// }

// class Status extends React.Component {
//   state = {
//     gpu: 0,
//     temp: 0,
//     miner: 'eth',
//   }
//   componentDidMount(){
//     var apiURL = "http://192.168.1.116:17790/api/summary";
//     var apiKey = "?key=0d6af9fca12f4c3188c836c79e39403c";
//     let blem = this;
//     axios.get(apiURL + apiKey)
//       .then(function (response) {
//         console.log(response);
//         let nextState = {... blem.state}; // use spread operation to store previous state object in var
//         nextState.gpu = response.data.gpuCount
//         nextState.temp = response.data.coinList[0].temperature // update value of state gpu property
//         blem.setState(nextState) // set state to new
//       })
//   .catch(function (error) {
//     console.log(error);
//   });
//   }
//   render() {
//     return (
//       <div className ="status">
//         <div className ="status">
//           <span className="miner">Miner:</span>
//           <span className="coin">ETH</span>
//           <div className="dropdown-icon" />
//         </div>
//         <div className ="status">
//           <span className="gpu">GPUs:</span>
//           <span className="countGpu">
//             {this.state.gpu}
//           </span>
//         </div>
//         <div className ="status">
//           <span>TEMP:</span>
//           <span className="temp">{this.state.temp} &deg;C</span>
//         </div>
//       </div>
//     );
//   }
// }

// class StatusBar extends React.Component {
//   render() {
//     return (
//       <div className="statusBar">
//         <Status />
//         <Buttons />
//       </div>
//     );
//   }
// }
////////////**Header**//////////////

// class Logo extends React.Component {
//   render() {
//     return (
//       <h1 className="logo">Minerhub</h1>
//     );
//   }
// }

// class Login extends React.Component {
//   render() {
//     return (
//       <div className="login">
//         <div className="profile-pic" />
//         <span>{this.props.username}</span>
//         <div className="dropdown-icon" />
//       </div>
//     );
//   }
// }

// class Header extends React.Component {
//   render() {
//     return (
//       <header className="site-header">
//         <Logo />
//         <Login username={this.props.username} />
//       </header>
//     );
//   }
// }

// import Header from './components/Header/Header';

class App extends React.Component {
//   state = {
//     data: {},
//   }

//   async componentDidMount() {
//     const data = await MinerService.get();
//     this.setState({ data })
//   }


  render() {
    return (
      <div>
        <Header username="Victor"/>
        <StatusBar />
      </div>
    );
  }
}



export default App;
