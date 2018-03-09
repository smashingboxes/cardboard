import Immutable from 'seamless-immutable';
import projectsReducer from './projects';

const initialState = Immutable.from({
  isActive: false,
  isFetched: false,
  data: {}
});

describe('reducers/projects', function() {
  describe('GET_PROJECTS_START', function() {
    let nextState;

    beforeEach(function() {
      nextState = projectsReducer(initialState, {
        type: 'GET_PROJECTS_START'
      });
    });

    it('sets isActive to true', function() {
      expect(nextState.isActive).to.be.true;
    });
  });

  describe('GET_PROJECTS_SUCCESS', function() {
    let expectedProjects;
    let nextState;

    beforeEach(function() {
      expectedProjects = fixture.generate('project', faker.random.number({ min: 1, max: 10 }));
      const previousState = Immutable.fromJS({
        isActive: true
      });
      nextState = projectsReducer(previousState, {
        type: 'GET_PROJECTS_SUCCESS',
        payload: {
          projects: expectedProjects
        }
      });
    });

    it('sets isActive to false', function() {
      expect(nextState.isActive).to.be.false;
    });

    it('sets isFetched to true', function() {
      expect(nextState.isFetched).to.be.true;
    });

    it('sets the projects data to the response', function() {
      expect(nextState.data).to.equal(Immutable.fromJS(expectedProjects));
    });
  });
});
