import PropTypes from 'prop-types';
import React from 'react';
import {
  Link
} from 'react-router-dom';

import routes from '../../constants/routes';

const propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  )
};

function ProjectList({ projects }) {
  return (
    <ul>
      {projects.map((project) => {
        const projectId = project.id;
        return (
          <li key={projectId}>
            <Link to={routes.PROJECT.build({ projectId })}>{project.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}

ProjectList.propTypes = propTypes;

export default ProjectList;
