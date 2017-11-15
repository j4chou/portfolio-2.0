import React, { Component } from 'react';
import './App.css';
import './../styles/app.css';


import Navbar from './Navbar/Navbar';
import Header from './Header/Header';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

import Scroll from 'react-scroll';

var Events     = Scroll.Events;
var scrollSpy  = Scroll.scrollSpy;

class App extends Component {
  // componentDidMount() {
  //     Events.scrollEvent.register('begin', function(to, element) {
  //       console.log("begin", arguments);
  //     });

  //     Events.scrollEvent.register('end', function(to, element) {
  //       console.log("end", arguments);
  //     });

  //     scrollSpy.update();
  //   }

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
