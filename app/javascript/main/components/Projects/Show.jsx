import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import React from 'react';
import Board from 'react-trello';

import COLUMNS from '../../constants/columns';
import Card from './Card';

const propTypes = {
  project: ImmutablePropTypes.contains({
    name: PropTypes.string.isRequired,
    epics: ImmutablePropTypes.contains({
      name: PropTypes.string.isRequired,
      stories: ImmutablePropTypes.contains({
        name: PropTypes.string.isRequired
      })
    })
  })
};

function ProjectShow({ project }) {
  const lanes = COLUMNS.map((column) => {
    const cards = project.get('stories')
      .filter((story) => column.statuses.indexOf(story.get('status')) !== -1)
      .map((story) => {
        return {
          id: story.get('id').toString(),
          details: story
        };
      })
      .toJS();
    return {
      id: column.label,
      title: column.label,
      label: cards.length.toString(),
      cards
    };
  });

  const boardData = { lanes };

  return (
    <div>
      <h1>{project.get('name')}</h1>
      <Board
        customCardLayout
        data={boardData}
        draggable
      >
        <Card />
      </Board>;
    </div>
  );
}

ProjectShow.propTypes = propTypes;

export default ProjectShow;
