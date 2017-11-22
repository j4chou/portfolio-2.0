import React, { Component } from 'react';

import Scroll from 'react-scroll';

import Form from './../Form/Form';
import './styles.css';
import './../../styles/app.css';

let Element = Scroll.Element;

class Contact extends Component {
  render() {
    return (
      <Element name="contact" className="contact section">
        <h1>Get in touch</h1>
        <Form />
      </Element>
    )
  }
}

export default Contact;