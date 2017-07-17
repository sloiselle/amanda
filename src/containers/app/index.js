import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import Admin from '../admin';
import NotAdmin from '../not_admin';
import ForSale from '../for_sale';
import Portfolio from '../portfolio';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUploadCount: 0,
    };
  }

  boxCountThreshold = 5;

  increaseBlueBoxCount = () => {
    const currentCount = this.state.showUploadCount;
    const newCount = currentCount + 1;
    this.setState({showUploadCount: newCount})
  }

  render() {
    return (
      <div>
        <header className='App-header'>
          <img 
            src='https://openclipart.org/image/800px/svg_to_png/224408/honeybee.png'
            className='App-logo'
            alt='logo'
          />
          <h1 className='App-text'>
            <span className='App-text-firstLetter'>A</span>manda
            <span className='App-text-firstLetter'> K</span>ate
            <span className='App-text-firstLetter'> D</span>es<span onClick={() => this.increaseBlueBoxCount()}>i</span>gn</h1>
        </header>
        <nav className='Nav'>
          <Link className='Nav-text' to="/">Home</Link>
          <Link className='Nav-text' to="/for_sale">For Sale</Link>
          <Link className='Nav-text' to="/portfolio">Portfolio</Link>
          <Link className='Nav-text' to="/about_the_artist">About the Artist</Link>
          <Link className='Nav-text' to="/contact_me">Contact Me</Link>
          {this.state.showUploadCount >= this.boxCountThreshold &&
            <Link className='Nav-text' to="/admin">Admin</Link>
          }
        </nav>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/for_sale" component={ForSale} />
          <Route exact path="/portfolio" component={Portfolio} />
          {this.state.showUploadCount >= this.boxCountThreshold &&
            <Route exact path="/admin" component={Admin} />
          }
          {this.state.showUploadCount < this.boxCountThreshold &&
            <Route exact path="/admin" component={NotAdmin} />
          }
        </main>
      </div>
    )
  }
}

export default App
