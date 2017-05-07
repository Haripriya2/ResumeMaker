import React, { Component } from 'react';
import logo from '../images/logo.svg';
import About from './About';
import Users from './Users';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <About aboutData='Introduction about yourself on the profile' />
        <Users />
      </div>
    );
  }
}

export default App;
