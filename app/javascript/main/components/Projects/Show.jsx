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
  const cards = project.get('stories').map((story) => {
    return {
      id: story.getIn(['id', 'oid']),
      title: `${project.get('slug')}-${story.get('idWithinProject')}`,
      description: story.get('description'),
      label: '30 mins'
    };
  }).toJS();

  const boardData = {
    lanes: [
      {
        id: 'lane1',
        title: 'Planned Tasks',
        label: '2/2',
        cards
      },
      {
        id: 'lane2',
        title: 'Completed',
        label: '0/0',
        cards: []
      }
    ]
  };


  return (
    <div>
      <h1>{project.get('name')} - {project.get('slug')}</h1>
      <Board draggable data={boardData} />;
    </div>
  );
}

ProjectShow.propTypes = propTypes;

export default ProjectShow;
