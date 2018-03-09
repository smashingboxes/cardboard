import Immutable from 'seamless-immutable';
import actionTypes from '../constants/actionTypes';

const INITIAL_STATE = Immutable.from({
  isActive: false,
  isFetched: false,
  data: {}
});

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case actionTypes.GET_STORY_START:
    return state.merge({
      isActive: true
    }).without('error');

  case actionTypes.GET_STORY_SUCCESS:
    return state.merge({
      isActive: false,
      isFetched: true,
      data: action.payload.story
    });

  case actionTypes.GET_STORY_FAILURE:
    return state.merge({
      error: action.payload.error,
      isActive: false
    });

  default:
    return state;
  }
}

export default reducer;
