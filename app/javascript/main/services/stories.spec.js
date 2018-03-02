import apiService from './api';
import storiesService from './stories';

describe('services/storiess', function() {
  beforeEach(function() {
    this.sandbox = sandbox.create();
  });

  afterEach(function() {
    this.sandbox.restore();
  });

  describe('getStory', function() {
    let expectedStory;
    let get;
    let promise;

    beforeEach(function() {
      expectedStory = fixture.generate('story');
      get = this.sandbox.stub(apiService, 'get').callsFake(() => {
        return Promise.resolve({
          data: expectedStory
        });
      });

      promise = storiesService.getStory(expectedStory.id);
    });

    it('gets the story', function() {
      return promise.then(() => {
        expect(get.calledOnce).to.be.true;
        const [url] = get.firstCall.args;
        expect(url).to.equal(`/stories/${expectedStory.id}`);
      });
    });
  });
});
