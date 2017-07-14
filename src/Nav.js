import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className='Nav'>
        <a className='Nav-text' href='#'>Home</a>
        <a className='Nav-text' href='#'>For Sale</a>
        <a className='Nav-text' href='#'>Portfolio/Past Sales</a>
        <a className='Nav-text' href='#'>About the Artist</a>
        <a className='Nav-text' href='#'>Contact Us</a>
      </div>
    );
  }
}

export default Nav;
