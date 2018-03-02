import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  story: ImmutablePropTypes.contains({
    slug: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
  })
};

function StoryShow({ story }) {
  return (
    <div>
      <h1>Slug: {story.get('slug')}</h1>
      <h1>Title: {story.get('summary')}</h1>
    </div>
  );
}

StoryShow.propTypes = propTypes;

export default StoryShow;
