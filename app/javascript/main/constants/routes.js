import Path from 'path-parser';

const routes = {
  ROOT: new Path('/'),

  PROJECTS: new Path('/projects'),
  PROJECT: new Path('/projects/:projectId'),

  STORY_NEW: new Path('/projects/:projectId/story/new'),
  STORY: new Path('/stories/:storyId')
};

export default routes;
