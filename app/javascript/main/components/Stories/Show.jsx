import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../constants/routes';

const propTypes = {
  story: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
  })
};

function StoryShow({ story }) {
  const projectsListLink = <Link to={routes.PROJECTS.build()}>Projects</Link>;
  const projectLink = <Link to={routes.PROJECT.build({ projectId: story.project.id })}>{story.project.name}</Link>;
  return (
    <div className="c-story">
      <div className="c-story__header">
        <span className="c-breadcrumb">
          {projectsListLink} / {projectLink} / {story.slug}
        </span>
      </div>
      <span className="c-story__summary">{story.summary}</span>
    </div>
  );
}

StoryShow.propTypes = propTypes;

export default StoryShow;
