import React from 'react';

import { Link } from 'react-router-dom';

const propTypes = {
  type: PropTypes.string,
  object
};

function AppLink() {
  return (
    <Link to={routes.PROJECTS.build()}>Projects</Link>
  );
}

AppLink.propTypes = propTypes;

export default AppLink;
