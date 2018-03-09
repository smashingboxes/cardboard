import PropTypes from 'prop-types';
import React from 'react';
import {
  Field
} from 'redux-form';


const propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

function NewStory(props) {
  const {
    handleSubmit
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field component="input" type="hidden" name="projectId" />
      <span>Slug:</span>
      <Field component="input" type="text" name="slug" />
      <br />
      <span>Summary:</span>
      <Field component="input" type="text" name="summary" />
      <br />

      <input type="submit" />
    </form>
  );
}

NewStory.propTypes = propTypes;

export default NewStory;
