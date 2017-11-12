import React, { Component} from 'react';
import './styles.css';

import Scroll from 'react-scroll';
import {scroller} from 'react-scroll';

var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

let Link  = Scroll.Link;

class Navbar extends Component {
  componentDidMount() {
      Events.scrollEvent.register('begin', function(to, element) {
        console.log("begin", arguments);
      });

      Events.scrollEvent.register('end', function(to, element) {
        console.log("end", arguments);
      });

      scrollSpy.update();
    }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  handleSetActive(to) {
     console.log('to', to);
   }
  render() {
    return (
      <div className="navbar">
       <div className="navbar-content">
          <Link activeClass="active" containerId="bodyContainer" hashSpy={true} to="about" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
            <h3 className="nav-title">About</h3>
            <h5 className="subtitle">Get to know me</h5>
          </Link>
          <Link activeClass="active" containerId="bodyContainer" hashSpy={true} to="projects" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
            <h3 className="nav-title">Projects</h3>
            <h5 className="subtitle">What I've done</h5>
          </Link>
          <Link activeClass="active" containerId="bodyContainer" hashSpy={true} to="contact" spy={true} smooth={true} duration={500} onSetActive={this.handleSetActive}>
            <h3 className="nav-title">Contact</h3>
            <h5 className="subtitle">Say hello</h5>
          </Link>
        </div>
        <h6 className="navbar-footer">
          Copyright Jessica Chou 2017
        </h6>
      </div>
    );
  }
}

export default Navbar;