import React from 'react';
import {
  Link
} from 'react-router-dom';

import routes from '../constants/routes';

const propTypes = { };

function Main() {
  return <Link to={routes.PROJECTS.build()}>Projects</Link>;
}

Main.propTypes = propTypes;

export default Main;
