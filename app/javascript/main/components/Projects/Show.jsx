import Immutable from 'immutable';
import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import React from 'react';
import Board from 'react-trello';

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

const COLUMNS = Immutable.fromJS([
  { label: 'To Do', statuses: ['todo'] },
  { label: 'In Progress', statuses: ['in_progress', 'qa_rejected'] },
  { label: 'Code Review', statuses: ['code_review', 'merged'] },
  { label: 'QA', statuses: ['qa'] },
  { label: 'Done', statuses: ['done'] }
]);

function ProjectShow({ project }) {
  const lanes = COLUMNS.map((column) => {
    const cards = project.get('stories')
      .filter((story) => column.get('statuses').includes(story.get('status')))
      .map((story) => {
        return {
          id: story.get('id').toString(),
          title: story.get('name'),
          description: story.get('description'),
          estimate: {
            type: 'points',
            value: 3
          }
        };
      })
      .toJS();
    return {
      id: column.get('label'),
      title: column.get('label'),
      label: cards.length.toString(),
      cards
    };
  }).toJS();

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
