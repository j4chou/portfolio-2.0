import React, { Component } from 'react';
import './App.css';
import './../styles/app.css';

import Navbar from './Navbar/Navbar';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div id="bodyContainer" className="section-wrapper parallax">
          <div className="parallax-layer layer-back">
          </div>
          <div className="parallax-layer layer-base">
            <About />
            <Projects />
            <Contact />
          </div>
          <div className="parallax-layer section-bottom">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
