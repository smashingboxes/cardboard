import ImmutablePropTypes from 'react-immutable-proptypes';
import PropTypes from 'prop-types';
import React from 'react';
import Board from 'react-trello';

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
  const todo = project.get('stories').map((story) => {
    return {
      id: story.get('id'),
      title: story.get('name'),
      description: story.get('description'),
      label: '30 mins'
    };
  }).toJS();
  const inProgress = [];
  const codeReview = [];
  const qa = [];
  const done = [];

  const boardData = {
    lanes: [
      {
        id: 'lane1',
        title: 'To Do',
        label: todo.length,
        cards: todo
      },
      {
        id: 'lane2',
        title: 'In Progress',
        label: inProgress.length,
        cards: inProgress
      },
      {
        id: 'lane3',
        title: 'Code Review',
        label: codeReview.length,
        cards: codeReview
      },
      {
        id: 'lane4',
        title: 'QA',
        label: qa.length,
        cards: qa
      },
      {
        id: 'lane5',
        title: 'Completed',
        label: done.length,
        cards: done
      }
    ]
  };


  return (
    <div>
      <h1>{project.get('name')}</h1>
      <Board draggable data={boardData} />;
    </div>
  );
}

ProjectShow.propTypes = propTypes;

export default ProjectShow;
