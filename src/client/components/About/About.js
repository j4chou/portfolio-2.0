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
            <i class="fa fa-linkedin-square"></i>
            <i class="fa fa-github-square"></i>
          </span>
        </div>
        <div className="body">
          This is the body
        </div>
      </Element>
    )
  }
}

export default About;