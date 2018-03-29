import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string
};

function Text({ className, input, label }) {
  return (
    <div className={`c-formfield ${className}`}>
      <label htmlFor={input.name}>{label}</label>
      <input type="text" id={input.name} {...input} />
    </div>
  );
}

Text.propTypes = propTypes;

export default Text;
