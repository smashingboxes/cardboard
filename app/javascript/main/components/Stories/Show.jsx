import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

import routes from '../../constants/routes';
import Breadcrumb from '../Breadcrumb';

const propTypes = {
  story: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
  })
};

function StoryShow({ story }) {
  return (
    <div className="c-story">
      <div className="c-story__header">
        <Breadcrumb>
          <Link to={routes.PROJECTS.build()}>Projects</Link>
          <Link to={routes.PROJECT.build({ projectId: story.project.id })}>{story.project.name}</Link>
          {story.slug}
        </Breadcrumb>
      </div>
      <span className="c-story__summary">{story.summary}</span>

      <ReactMarkdown
        className="markdown-body c-story__description"
        source={story.description}
      />
    </div>
  );
}

StoryShow.propTypes = propTypes;

export default StoryShow;
