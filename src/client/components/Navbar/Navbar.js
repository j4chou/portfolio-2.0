import React, { Component} from 'react';
import './styles.css';

import Scroll from 'react-scroll';

let Link  = Scroll.Link;

class Navbar extends Component {

  render() {
    return (
      <div className="navbar">
       <div className="navbar-content">
          <Link activeClass="active" containerId="bodyContainer" hashSpy={true} to="about" spy={true} smooth={true} duration={500}>
            <h3 className="nav-title">About</h3>
            <h5 className="subtitle">Get to know me</h5>
          </Link>
          <Link activeClass="active" containerId="bodyContainer" hashSpy={true} to="projects" spy={true} smooth={true} duration={500}>
            <h3 className="nav-title">Projects</h3>
            <h5 className="subtitle">What I've done</h5>
          </Link>
          <Link activeClass="active" containerId="bodyContainer" hashSpy={true} to="contact" spy={true} smooth={true} duration={500}>
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