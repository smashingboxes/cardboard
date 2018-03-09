import PropTypes from 'prop-types';
import React from 'react';
import Board from 'react-trello';

import COLUMNS from '../../constants/columns';
import Card from './Card';

const propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    epics: PropTypes.shape({
      name: PropTypes.string.isRequired,
      stories: PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    })
  })
};

function ProjectShow({ project }) {
  const lanes = COLUMNS.map((column) => {
    const cards = project.stories
      .asMutable({ deep: true })
      .filter((story) => column.statuses.indexOf(story.status) !== -1)
      .map((story) => {
        return {
          id: story.id.toString(),
          details: story
        };
      });
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
      <h1>{project.name}</h1>
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
