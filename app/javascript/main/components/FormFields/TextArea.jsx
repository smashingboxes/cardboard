import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string
};

function TextArea({ className, input, label }) {
  return (
    <div className={`c-formfield ${className}`}>
      <label htmlFor={input.name}>{label}</label>
      <textarea id={input.name} {...input} />
    </div>
  );
}

TextArea.propTypes = propTypes;

export default TextArea;
