import Immutable from 'immutable';

function createItemReducer(resource, operations) {
  // eg PROJECTS
  const actionPrefix = resource.toUpperCase();

  const INITIAL_STATE = new Immutable.Map({
    isActive: false,
    isFetched: false,
    data: new Immutable.Map()
  });

  return function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
    case `${actionPrefix}_RETRIEVE_START`:
      return state.withMutations((map) => {
        map.delete('error');
        map.set('isActive', true);
      });

    case `${actionPrefix}_RETRIEVE_SUCCESS`:
      return state.withMutations((map) => {
        map.set('isActive', false);
        map.set('isFetched', true);
        map.set('data', Immutable.fromJS(action.payload.response));
      });

    case `${actionPrefix}_RETRIEVE_FAILURE`:
      return state.withMutations((map) => {
        map.set('error', action.payload.error);
        map.set('isActive', false);
      });

    default:
      return state;
    }
  };
}

function createListReducer(resource) {
  // eg PROJECTS
  const actionPrefix = resource.toUpperCase();

  const INITIAL_STATE = new Immutable.Map({
    isActive: false,
    isFetched: false,
    data: new Immutable.List()
  });

  return function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
    case `${actionPrefix}_LIST_START`:
      return state.withMutations((map) => {
        map.delete('error');
        map.set('isActive', true);
      });

    case `${actionPrefix}_LIST_SUCCESS`:
      return state.withMutations((map) => {
        map.set('isActive', false);
        map.set('isFetched', true);
        map.set('data', Immutable.fromJS(action.payload.response));
      });

    case `${actionPrefix}_LIST_FAILURE`:
      return state.withMutations((map) => {
        map.set('error', action.payload.error);
        map.set('isActive', false);
      });

    default:
      return state;
    }
  };
}

export {
  createListReducer,
  createItemReducer
};
