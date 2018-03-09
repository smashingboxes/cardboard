import PropTypes from 'prop-types';
import React from 'react';
import {
  Field
} from 'redux-form';

import { Text } from '../FormFields';

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

      <Field
        component={Text}
        label="Slug"
        name="slug"
      />

      <Field
        component={Text}
        label="Summary"
        name="summary"
      />

      <input type="submit" />
    </form>
  );
}

NewStory.propTypes = propTypes;

export default NewStory;
