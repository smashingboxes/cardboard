import * as actions from './stories';
import storiesService from '../services/stories';

describe('actions/stories', () => {
  beforeEach(function() {
    this.sandbox = sandbox.create();
  });

  afterEach(function() {
    this.sandbox.restore();
  });

  describe('getStory', function() {
    let dispatch;
    let expectedStory;
    let getStory;
    let promise;

    beforeEach(function() {
      expectedStory = fixture.generate('story');

      dispatch = this.sandbox.stub();
      getStory = this.sandbox.stub(storiesService, 'getStory').callsFake(() => {
        return Promise.resolve(expectedStory);
      });

      promise = actions.getStory(expectedStory.id)(dispatch);
    });

    it('dispatches a GET_STORY_START action', function() {
      expect(dispatch.calledOnce).to.be.true;
      const [action] = dispatch.firstCall.args;
      expect(action).to.deep.equal({
        type: 'GET_STORY_START'
      });
    });

    it('gets the story', function() {
      expect(getStory.calledOnce).to.be.true;
    });

    it('dispatches a GET_STORY_SUCCESS action', function() {
      return promise.then(() => {
        expect(dispatch.calledTwice).to.be.true;
        const [action] = dispatch.secondCall.args;
        expect(action).to.deep.equal({
          type: 'GET_STORY_SUCCESS',
          payload: {
            story: expectedStory
          }
        });
      });
    });
  });
});
