import Immutable from 'immutable';
import projectReducer from './project';

const initialState = new Immutable.Map({
  isActive: false,
  isFetched: false,
  data: new Immutable.Map()
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
      expect(nextState.get('isActive')).to.be.true;
    });
  });

  describe('GET_PROJECT_SUCCESS', function() {
    let expectedProject;
    let nextState;

    beforeEach(function() {
      expectedProject = fixture.generateOne('project');
      const previousState = Immutable.fromJS({
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
      expect(nextState.get('isActive')).to.be.false;
    });

    it('sets isFetched to true', function() {
      expect(nextState.get('isFetched')).to.be.true;
    });

    it('sets the project data to the response', function() {
      expect(nextState.get('data')).to.equal(Immutable.fromJS(expectedProject));
    });
  });
});
