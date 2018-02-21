import { combineReducers } from 'redux-immutable';
import project from './project';
import projects from './projects';

export default combineReducers({
  project,
  projects
});
