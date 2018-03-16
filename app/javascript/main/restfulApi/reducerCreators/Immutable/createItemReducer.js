import Immutable from 'immutable';

function createItemReducer(resource) {
  // eg PROJECTS
  const actionPrefix = resource.toUpperCase();

  const INITIAL_STATE = new Immutable.Map({
    isActive: false,
    isFetched: false,
    data: new Immutable.Map(),
    error: null
  });

  return function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
    case `${actionPrefix}_RETRIEVE_START`:
    case `${actionPrefix}_CREATE_START`:
    case `${actionPrefix}_UPDATE_START`:
    case `${actionPrefix}_DELETE_START`:
      return state.withMutations((map) => {
        map.delete('error');
        map.set('isActive', true);
      });

    case `${actionPrefix}_RETRIEVE_SUCCESS`:
    case `${actionPrefix}_CREATE_SUCCESS`:
    case `${actionPrefix}_UPDATE_SUCCESS`:
    case `${actionPrefix}_DELETE_SUCCESS`:
      return state.withMutations((map) => {
        map.set('isActive', false);
        map.set('isFetched', true);
        map.set('data', Immutable.fromJS(action.payload.response));
      });

    case `${actionPrefix}_RETRIEVE_FAILURE`:
    case `${actionPrefix}_CREATE_FAILURE`:
    case `${actionPrefix}_UPDATE_FAILURE`:
    case `${actionPrefix}_DELETE_FAILURE`:
      return state.withMutations((map) => {
        map.set('error', action.payload.error);
        map.set('isActive', false);
      });

    default:
      return state;
    }
  };
}

export default createItemReducer;
