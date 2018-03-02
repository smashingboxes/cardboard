import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';
import project from './project';
import projects from './projects';
import story from './story';

export default combineReducers({
  form,
  project,
  projects,
  story
});
