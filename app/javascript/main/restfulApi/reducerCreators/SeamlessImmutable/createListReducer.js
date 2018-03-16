import Immutable from 'seamless-immutable';

function createListReducer(resource) {
  // eg PROJECTS
  const actionPrefix = resource.toUpperCase();

  const INITIAL_STATE = Immutable.from({
    isActive: false,
    isFetched: false,
    data: []
  });

  return function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
    case `${actionPrefix}_LIST_START`:
      return state.merge({
        isActive: true
      }).without('error');

    case `${actionPrefix}_LIST_SUCCESS`:
      return state.merge({
        isActive: false,
        isFetched: true,
        data: Immutable.from(action.payload.response)
      });

    case `${actionPrefix}_LIST_FAILURE`:
      return state.merge({
        error: action.payload.error,
        isActive: false
      });

    default:
      return state;
    }
  };
}

export default createListReducer;
