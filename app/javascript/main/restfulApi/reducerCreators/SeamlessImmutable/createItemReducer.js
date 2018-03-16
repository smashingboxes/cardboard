import Immutable from 'seamless-immutable';

function createItemReducer(resource) {
  // eg PROJECTS
  const actionPrefix = resource.toUpperCase();

  const INITIAL_STATE = Immutable.from({
    isActive: false,
    isFetched: false,
    data: {},
    error: null
  });

  return function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
    case `${actionPrefix}_RETRIEVE_START`:
    case `${actionPrefix}_CREATE_START`:
    case `${actionPrefix}_UPDATE_START`:
    case `${actionPrefix}_DELETE_START`:
      return state.merge({
        isActive: true
      }).without('error');

    case `${actionPrefix}_RETRIEVE_SUCCESS`:
    case `${actionPrefix}_CREATE_SUCCESS`:
    case `${actionPrefix}_UPDATE_SUCCESS`:
    case `${actionPrefix}_DELETE_SUCCESS`:
      return state.merge({
        isActive: false,
        isFetched: true,
        data: Immutable.from(action.payload.response)
      });

    case `${actionPrefix}_RETRIEVE_FAILURE`:
    case `${actionPrefix}_CREATE_FAILURE`:
    case `${actionPrefix}_UPDATE_FAILURE`:
    case `${actionPrefix}_DELETE_FAILURE`:
      return state.merge({
        error: action.payload.error,
        isActive: false
      });

    default:
      return state;
    }
  };
}

export default createItemReducer;

