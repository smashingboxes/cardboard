import Immutable from 'seamless-immutable';
import projectReducer from './project';

const initialState = Immutable.from({
  isActive: false,
  isFetched: false,
  data: {}
});

describe('reducers/project', function() {
  describe('GET_PROJECT_START', function() {
    let nextState;

    beforeEach(function() {
      nextState = projectReducer(initialState, {
        type: 'GET_PROJECT_START'
      });
    });

    it('sets isActive to true', function() {
      expect(nextState.isActive).to.be.true;
    });
  });

  describe('GET_PROJECT_SUCCESS', function() {
    let expectedProject;
    let nextState;

    beforeEach(function() {
      expectedProject = fixture.generateOne('project');
      const previousState = Immutable.from({
        isActive: true
      });
      nextState = projectReducer(previousState, {
        type: 'GET_PROJECT_SUCCESS',
        payload: {
          project: expectedProject
        }
      });
    });

    it('sets isActive to false', function() {
      expect(nextState.isActive).to.be.false;
    });

    it('sets isFetched to true', function() {
      expect(nextState.isFetched).to.be.true;
    });

    it('sets the project data to the response', function() {
      expect(nextState.data).to.deep.equal(Immutable.from(expectedProject));
    });
  });
});
