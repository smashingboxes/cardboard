import Immutable from 'seamless-immutable';

function createListReducer(resource, resourceConfig) {
  const customReducer = resourceConfig.listReducer;
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

    // TODO: Test this. Pretty sure it works, but not 100% sure
    // case `${actionPrefix}_UPDATE_SUCCESS`: {
    //   const index = state.data.findIndex((item) => item.id === action.payload.response.id);
    //   if (index === -1) { return state; }
    //   return state.merge({
    //     data: state.data.set(index, Immutable.from(action.payload.response))
    //   });
    // }

    default: {
      if (customReducer) {
        return customReducer(state, action);
      }
      return state;
    }
    }
  };
}

export default createListReducer;
