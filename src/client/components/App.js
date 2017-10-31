import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './../styles/app.css';


import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="section-wrapper parallax">
          <div className="parallax-layer layer-back">
            This is the background
          </div>
          <div className="parallax-layer layer-base">
            This is the foreground
          <About />
          <Projects />
          <Contact />
          </div>
          <div className="parallax-layer section-bottom">
          This is the bottom
          </div>
        </div>
      </div>
    );
  }
}

export default App;
