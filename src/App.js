import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase';
import Nav from './Nav.js';
import Portfolio from './Portfolio.js';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src='https://openclipart.org/image/800px/svg_to_png/224408/honeybee.png' className='App-logo' alt='logo' />
          <h1 className='App-text'><span className='App-text-firstLetter'>A</span>manda <span className='App-text-firstLetter'>K</span>ate <span className='App-text-firstLetter'>D</span>esign</h1>
        </div>
        <Nav />
        <Portfolio />
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
