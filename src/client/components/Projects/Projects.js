import React, { Component } from 'react';

import Scroll from 'react-scroll';
import {scroller} from 'react-scroll';

import './styles.css';
import './../../styles/app.css';

let Element = Scroll.Element;

class Projects extends Component {
  render() {
    return (
      <Element name="projects" className="projects section">
        test element Projects section
      </Element>
    )
  }
}

export default Projects;