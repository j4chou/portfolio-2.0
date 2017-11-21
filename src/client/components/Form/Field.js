import React from 'react';
import PropTypes from 'prop-types';

const Field = (props) => (
  <div className="field">
    <label>
      <div className="label-icon">
        <i className={props.icon} aria-hidden="true"></i>
      </div>
    </label>
    {props.textarea ? 
      <textarea 
        placeholder={props.placeholder}
        value={props.value} 
        onChange={props.onChange}
        type='text'
        required
        /> :
      <input
        onChange={props.onChange}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        required
      />
    }
  </div>
);

Field.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  textarea: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
};

Field.defaultProps = {
  textarea: false,
};

export default Field;