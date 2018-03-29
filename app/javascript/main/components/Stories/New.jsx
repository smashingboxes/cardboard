import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import { Field } from 'redux-form';

import routes from '../../constants/routes';
import { Text, MarkdownEditor } from '../FormFields';
import Breadcrumb from '../Breadcrumb';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
};

function NewStory({ handleSubmit, project }) {
  return (
    <div>
      <Breadcrumb>
        <Link to={routes.PROJECTS.build()}>Projects</Link>
        <Link to={routes.PROJECT.build({ projectId: project.id })}>{project.name}</Link>
        New Story
      </Breadcrumb>

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
    </div>
  );
}

NewStory.propTypes = propTypes;

export default NewStory;
