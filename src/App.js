import React, { Component } from 'react';
import logo from './billsface.png';
import './App.css';
import Bio from './components/Bio.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fun with UI</h1>
        </header>
        <p className="App-intro">
          Here we will be doing all of Bill's basic examples using react instead of html and css.
        </p>
        <Bio/>
      </div>
    );
  }
}

export default App;
