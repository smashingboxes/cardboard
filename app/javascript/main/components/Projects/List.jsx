import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  Link
} from 'react-router-dom';

import routes from '../../constants/routes';

const propTypes = {
  projects: ImmutablePropTypes.listOf(
    ImmutablePropTypes.contains({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

function ProjectList({ projects }) {
  return (
    <ul>
      {projects.map((project) => {
        const projectId = project.get('id');
        return (
          <li key={projectId}>
            <Link to={routes.PROJECT.build({ projectId })}>{project.get('name')}</Link>
          </li>
        );
      })}
    </ul>
  );
}

ProjectList.propTypes = propTypes;

export default ProjectList;
