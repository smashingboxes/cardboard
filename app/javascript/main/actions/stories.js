import actionTypes from '../constants/actionTypes';
import storiesService from '../services/stories';

function getStoryStart() {
  return {
    type: actionTypes.GET_STORY_START
  };
}

function getStorySuccess(story) {
  return {
    type: actionTypes.GET_STORY_SUCCESS,
    payload: { story }
  };
}

function getStory(storyId) {
  return function(dispatch) {
    dispatch(getStoryStart());

    return storiesService
      .getStory(storyId)
      .then((story) => dispatch(getStorySuccess(story)));
  };
}

export {
  getStory
};
