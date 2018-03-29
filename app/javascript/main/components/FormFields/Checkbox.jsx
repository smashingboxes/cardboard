import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string
};

function Checkbox({ className, input, label }) {
  return (
    <div className={`c-formfield ${className}`}>
      <label htmlFor={input.name}>{label}</label>
      <input type="checkbox" id={input.name} {...input} />
    </div>
  );
}

Checkbox.propTypes = propTypes;

export default Checkbox;
