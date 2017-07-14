import React, { Component } from 'react';
import * as firebase from 'firebase';
import './Portfolio.css';

class Portfolio extends Component {
  render() {
    return (
      <div className='Portfolio'>
        <a className='Portfolio-text' href='#'>Home</a>
        <a className='Portfolio-text' href='#'>For Sale</a>
        <a className='Portfolio-text' href='#'>Portfolio/Past Sales</a>
        <a className='Portfolio-text' href='#'>About the Artist</a>
        <a className='Portfolio-text' href='#'>Contact Us</a>
      </div>
    );
  }
}

export default Portfolio;
