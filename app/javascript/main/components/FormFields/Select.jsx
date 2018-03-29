import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.isRequired
    })
  ).isRequired
};

function TextArea({ className, input, label, options }) {
  return (
    <div className={`c-formfield ${className}`}>
      <label htmlFor={input.name}>{label}</label>
      <select id={input.name} {...input}>
        {
          options.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })
        }
      </select>
    </div>
  );
}

TextArea.propTypes = propTypes;

export default TextArea;
