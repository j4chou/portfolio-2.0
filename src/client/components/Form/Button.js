import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  static propTypes = {
    formValues: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
    this.formIsValid = this.formIsValid.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  formIsValid(props) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return props.name.length && re.test(props.email) && props.message.length;
  }

  handleSubmit() {
    if (this.formIsValid(this.props.formValues)) {
      window.emailjs.send("gmail", "template_ooEw6zjJ", {
        "from_name": this.props.formValues.name,
        "reply_to": this.props.formValues.email,
        "message_html": this.props.formValues.message
      })
      .then(function(resp) {
        this.setState({ isClicked: true });
      })
      .bind(this);
    } else {
      console.log('something not vlaid')
    }
  };

  render() {
    return ( 
      <button 
      onClick={this.handleSubmit}
      disabled={this.state.isClicked}
      type="submit">
      Submit 
      </button>
    );
  }
}

export default Button;