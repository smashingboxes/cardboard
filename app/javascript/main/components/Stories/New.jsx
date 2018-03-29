import PropTypes from 'prop-types';
import React from 'react';
import {
  Field
} from 'redux-form';

import { Text, MarkdownEditor } from '../FormFields';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

function NewStory(props) {
  const {
    handleSubmit
  } = props;
  return (
    <form className="l-story-new" onSubmit={handleSubmit}>
      <Field component="input" type="hidden" name="projectId" />

      <Field
        className="l-story-new__slug"
        component={Text}
        label="Slug"
        name="slug"
      />

      <Field
        className="l-story-new__summary"
        component={Text}
        label="Summary"
        name="summary"
      />

      <Field
        className="l-story-new__description"
        component={MarkdownEditor}
        label="Description"
        name="description"
      />

      <input type="submit" />
    </form>
  );
}

NewStory.propTypes = propTypes;

export default NewStory;
