import PropTypes from 'prop-types';
import React from 'react';
import Board from 'react-trello';

import COLUMNS from '../../constants/columns';
import routes from '../../constants/routes';
import Card from './Card';

import { Link } from 'react-router-dom';

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
      <div className="c-project__header">
        <div>
          <h1>
            <Link to={routes.PROJECTS.build()}>Projects</Link> / {project.name}
          </h1>
        </div>
        <Link className="c-button" to={routes.STORY_NEW.build({ projectId: project.id })}>Create Story</Link>
      </div>
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
