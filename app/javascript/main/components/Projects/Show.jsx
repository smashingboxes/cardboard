import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Board from 'react-trello';

import COLUMNS from '../../constants/columns';
import routes from '../../constants/routes';
import Card from './Card';
import Breadcrumb from '../Breadcrumb';

const propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    epics: PropTypes.shape({
      name: PropTypes.string.isRequired,
      stories: PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    })
  }),
  actions: PropTypes.shape({
    stories: PropTypes.shape({
      update: PropTypes.func.isRequired
    }).isRequired
  }).isRequired
};

function ProjectShow({ project, actions }) {
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
      id: column.id,
      title: column.label,
      label: cards.length.toString(),
      cards
    };
  });

  const boardData = { lanes };
  function handleDragEnd(cardId, _, targetLaneId) {
    actions.stories.update(cardId, {
      status: targetLaneId
    });
  }


  return (
    <div>
      <div className="c-project__header">
        <Breadcrumb>
          <Link to={routes.PROJECTS.build()}>Projects</Link>
          {project.name}
        </Breadcrumb>
        <Link className="c-button" to={routes.STORY_NEW.build({ projectId: project.id })}>Create Story</Link>
      </div>
      <Board
        customCardLayout
        data={boardData}
        draggable
        handleDragEnd={handleDragEnd}
      >
        <Card />
      </Board>;
    </div>
  );
}

ProjectShow.propTypes = propTypes;

export default ProjectShow;
