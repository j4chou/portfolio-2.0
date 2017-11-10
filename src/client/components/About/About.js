import React, { Component } from 'react';

import Scroll from 'react-scroll';
import {scroller} from 'react-scroll';

import './styles.css';
import './../../styles/app.css';

let Element = Scroll.Element;

class About extends Component {

  render() {
    
    return (
      <Element name="about" className="about section">
        <div className="title">
          <h1>Jessica Chou</h1>
          <p>Software Engineer</p>
          <p>Los Angeles, CA</p>
          <span class="icon-row">
            <a href="http://www.linkedin.com/in/jessicachou1/" key="linkedin">
              <i class="fa fa-linkedin-square"></i>
            </a>
            <a href="http://www.github.com/j4chou" key="github">
              <i class="fa fa-github-square"></i>
            </a>
          </span>
        </div>
        <div className="body">
          <p>This is the body</p>
        </div>
      </Element>
    )
  }
}

export default About;