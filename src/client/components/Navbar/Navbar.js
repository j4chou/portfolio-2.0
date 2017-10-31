import React from 'react';
import './styles.css';

import Scroll from 'react-scroll';
import {scroller} from 'react-scroll';

let Link  = Scroll.Link;

const Navbar = () => {
  return (
    <div className='navbar'>
     <div class='navbar-content'>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
          <h3 className='nav-title'>About</h3>
          <h6 className='subtitle'>Get to know me</h6>
        </Link>
        <Link activeClass='active' to='projects' spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
          <h3 className='nav-title'>Projects</h3>
          <h6 className='subtitle'>What I've done</h6>
        </Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
          <h3 className='nav-title'>Contact</h3>
          <h6 className='subtitle'>Say hello</h6>
        </Link>
      </div>
      <h6 className='navbar-footer'>
      Copyright Jessica Chou 2017
      </h6>
    </div>
  );
}

export default Navbar;