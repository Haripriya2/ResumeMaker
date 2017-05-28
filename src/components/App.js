import React, { Component } from 'react';
import logo from '../images/logo.svg';
import Navigation from './NavigationBar';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2><img src={logo} className="App-logo" alt="logo" />Build your Resume</h2>
        </div>
        <Navigation />
        <div className="App-body"> 
        {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
