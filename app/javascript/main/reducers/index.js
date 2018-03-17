import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import api from '../utils/api';

export default combineReducers({
  form,
  ...api.reducers
});
