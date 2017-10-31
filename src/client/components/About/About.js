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
        <h1>Jessica Chou</h1>
        <p>Software Engineer</p>
        <p>Los Angeles, CA</p>
      </Element>
    )
  }
}

export default About;