import React, { Component } from 'react';

import Scroll from 'react-scroll';
import {scroller} from 'react-scroll';

import './styles.css';
import './../../styles/app.css';

let Element = Scroll.Element;

class Contact extends Component {
  render() {
    return (
      <Element name="contact" className="contact section">
        test element Contact section
      </Element>
    )
  }
}

export default Contact;