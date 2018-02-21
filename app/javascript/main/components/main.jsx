import React from 'react';
import {
  Link
} from 'react-router-dom';

const propTypes = { };

function Main() {
  return <Link to="projects">Projects</Link>;
}

Main.propTypes = propTypes;

export default Main;
