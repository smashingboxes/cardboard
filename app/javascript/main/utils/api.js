import Immutable from 'seamless-immutable';
import Api from '../restfulApi';

const api = new Api({
  resources: {
    projects: {
      itemReducer: (state, action) => {
        switch (action.type) {
        case 'STORIES_UPDATE_SUCCESS': {
          const index = state.data.stories.findIndex((story) => story.id === action.payload.response.id);
          if (index === -1) { return state; }
          return state.setIn(
            ['data', 'stories', index],
            Immutable.from(action.payload.response)
          );
        }
        default:
          return state;
        }
      }
    },
    stories: {}
  }
});

export default api;
