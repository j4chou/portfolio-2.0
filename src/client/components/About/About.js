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
          <p>
            I am a SoCal native with Chinese and Vietnamese roots. I am a 
            casual gamer, a food/drink enthusiast, and an aspiring extrovert.

            I am also an alumnus of UC San Diego, with a degree in Psychology 
            (organizational concentration) and a minor in Business. My main 
            passion lies in web development where unique challenges present 
            themselves on a daily basis, which I can solve through creative 
            thinking and problem solving. Technologies are ever-changing - 
            meaning, there's always more to learn!
          </p>
        </div>
      </Element>
    )
  }
}

export default About;