import Path from 'path-parser';

const routes = {
  ROOT: new Path('/'),

  PROJECTS: new Path('/projects'),
  PROJECT: new Path('/projects/:projectId')
};

export default routes;
