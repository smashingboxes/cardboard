import PropTypes from 'prop-types';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const propTypes = {
  className: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string
};

function MarkdownEditor({ className, input, label }) {
  return (
    <div className={`c-formfield c-markdown-editor ${className}`}>
      <label
        className="c-markdown-editor__label"
        htmlFor={input.name}
      >
        {label}
      </label>

      {/* TODO: Include link to formatting help */}
      <textarea
        id={input.name}
        className="c-markdown-editor__input"
        {...input}
      />

      <ReactMarkdown
        className="markdown-body c-markdown-editor__preview"
        source={input.value}
      />
    </div>
  );
}

MarkdownEditor.propTypes = propTypes;

export default MarkdownEditor;
