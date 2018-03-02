import Immutable from 'immutable';
import actionTypes from '../constants/actionTypes';

const INITIAL_STATE = new Immutable.Map({
  isActive: false,
  isFetched: false,
  data: new Immutable.Map()
});

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actionTypes.GET_STORY_START:
    return state.withMutations((map) => {
      map.delete('error');
      map.set('isActive', true);
    });

  case actionTypes.GET_STORY_SUCCESS:
    return state.withMutations((map) => {
      map.set('isActive', false);
      map.set('isFetched', true);
      map.set('data', Immutable.fromJS(action.payload.story));
    });

  case actionTypes.GET_STORY_FAILURE:
    return state.withMutations((map) => {
      map.set('error', action.payload.error);
      map.set('isActive', false);
    });

  default:
    return state;
  }
}

export default reducer;
