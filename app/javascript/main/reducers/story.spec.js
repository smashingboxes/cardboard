import Immutable from 'seamless-immutable';
import storyReducer from './story';

const initialState = Immutable.from({
  isActive: false,
  isFetched: false,
  data: {}
});

describe('reducers/story', function() {
  describe('GET_STORY_START', function() {
    let nextState;

    beforeEach(function() {
      nextState = storyReducer(initialState, {
        type: 'GET_STORY_START'
      });
    });

    it('sets isActive to true', function() {
      expect(nextState.isActive).to.be.true;
    });
  });

  describe('GET_STORY_SUCCESS', function() {
    let expectedStory;
    let nextState;

    beforeEach(function() {
      expectedStory = fixture.generateOne('story');
      const previousState = Immutable.fromJS({
        isActive: true
      });
      nextState = storyReducer(previousState, {
        type: 'GET_STORY_SUCCESS',
        payload: {
          story: expectedStory
        }
      });
    });

    it('sets isActive to false', function() {
      expect(nextState.isActive).to.be.false;
    });

    it('sets isFetched to true', function() {
      expect(nextState.isFetched).to.be.true;
    });

    it('sets the story data to the response', function() {
      expect(nextState.data).to.equal(Immutable.fromJS(expectedStory));
    });
  });
});
