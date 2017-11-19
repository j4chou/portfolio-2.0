import React, { Component } from 'react';

import './styles.css';
import Field from './Field';
import Button from './Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
    };
    this.updateField = this.updateField.bind(this);
  }

  updateField(field, value) {
    this.setState({ [field]: value });
  }

  render() {
    return (
      <div className="contact-form">
        <Field
          placeholder="Name"
          onChange={(event) => this.updateField('name', event.target.value)}
          value={this.state.name}
          icon="fa fa-user"
        />
        <Field
          placeholder="Email"
          onChange={(event) => this.updateField('email', event.target.value)}
          value={this.state.email}
          icon="fa fa-envelope"
        />
        <Field
          placeholder="Message"
          onChange={(event) => this.updateField('message', event.target.value)}
          textarea={true}
          value={this.state.message}
          icon="fa fa-comment"
        />
        <Button
          email="j4chou@gmail.com"
          formValues={this.state}
        />
      </div>
    );
  }
}

export default Form;