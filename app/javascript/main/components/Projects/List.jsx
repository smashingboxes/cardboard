import PropTypes from 'prop-types';
import React from 'react';
import ImmutablePropTypes from 'react-immutable-proptypes';
import {
  Link
} from 'react-router-dom';

const propTypes = {
  projects: ImmutablePropTypes.listOf(
    ImmutablePropTypes.contains({
      id: ImmutablePropTypes.contains({
        oid: PropTypes.string.isRequired
      }),
      name: PropTypes.string.isRequired
    })
  )
};

function ProjectList({ projects }) {
  return (
    <ul>
      {projects.map((project) => {
        const oid = project.getIn(['id', 'oid']);
        return (
          <li key={oid}>
            <Link to={`/projects/${oid}`}>{project.get('name')}</Link>
          </li>
        );
      })}
    </ul>
  );
}

ProjectList.propTypes = propTypes;

export default ProjectList;
