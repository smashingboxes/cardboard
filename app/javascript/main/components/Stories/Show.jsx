import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  story: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
  })
};

function StoryShow({ story }) {
  return (
    <div>
      <h1>Slug: {story.slug}</h1>
      <h1>Title: {story.summary}</h1>
    </div>
  );
}

StoryShow.propTypes = propTypes;

export default StoryShow;
