import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import project from './project';
import projects from './projects';
import story from './story';

export default combineReducers({
  form,
  project,
  projects,
  story
});
