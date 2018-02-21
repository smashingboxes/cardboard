import Immutable from 'immutable';
import actionTypes from '../constants/actionTypes';

const INITIAL_STATE = new Immutable.Map({
  isActive: false,
  isFetched: false,
  data: new Immutable.List()
});

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actionTypes.GET_PROJECTS_START:
    return state.withMutations((map) => {
      map.delete('error');
      map.set('isActive', true);
    });

  case actionTypes.GET_PROJECTS_SUCCESS:
    return state.withMutations((map) => {
      map.set('isActive', false);
      map.set('isFetched', true);
      map.set('data', Immutable.fromJS(action.payload.projects));
    });

  case actionTypes.GET_PROJECTS_FAILURE:
    return state.withMutations((map) => {
      map.set('error', action.payload.error);
      map.set('isActive', false);
    });

  default:
    return state;
  }
}

export default reducer;
