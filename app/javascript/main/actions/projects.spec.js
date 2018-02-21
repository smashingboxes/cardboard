import * as actions from './projects';
import projectsService from '../services/projects';

describe('actions/projects', () => {
  beforeEach(function() {
    this.sandbox = sandbox.create();
  });

  afterEach(function() {
    this.sandbox.restore();
  });

  describe('getProjects', function() {
    let dispatch;
    let expectedProjects;
    let getProjects;
    let promise;

    beforeEach(function() {
      expectedProjects = fixture.generate('project', faker.random.number({ min: 1, max: 10 }));

      dispatch = this.sandbox.stub();
      getProjects = this.sandbox.stub(projectsService, 'getProjects').callsFake(() => {
        return Promise.resolve(expectedProjects);
      });

      promise = actions.getProjects()(dispatch);
    });

    it('dispatches a GET_PROJECTS_START action', function() {
      expect(dispatch.calledOnce).to.be.true;
      const [action] = dispatch.firstCall.args;
      expect(action).to.deep.equal({
        type: 'GET_PROJECTS_START'
      });
    });

    it('gets all projects', function() {
      expect(getProjects.calledOnce).to.be.true;
    });

    it('dispatches a GET_PROJECTS_SUCCESS action', function() {
      return promise.then(() => {
        expect(dispatch.calledTwice).to.be.true;
        const [action] = dispatch.secondCall.args;
        expect(action).to.deep.equal({
          type: 'GET_PROJECTS_SUCCESS',
          payload: {
            projects: expectedProjects
          }
        });
      });
    });
  });

  describe('getProject', function() {
    let dispatch;
    let expectedProject;
    let getProject;
    let promise;

    beforeEach(function() {
      expectedProject = fixture.generate('project');

      dispatch = this.sandbox.stub();
      getProject = this.sandbox.stub(projectsService, 'getProject').callsFake(() => {
        return Promise.resolve(expectedProject);
      });

      promise = actions.getProject(expectedProject.id)(dispatch);
    });

    it('dispatches a GET_PROJECT_START action', function() {
      expect(dispatch.calledOnce).to.be.true;
      const [action] = dispatch.firstCall.args;
      expect(action).to.deep.equal({
        type: 'GET_PROJECT_START'
      });
    });

    it('gets the project', function() {
      expect(getProject.calledOnce).to.be.true;
    });

    it('dispatches a GET_PROJECT_SUCCESS action', function() {
      return promise.then(() => {
        expect(dispatch.calledTwice).to.be.true;
        const [action] = dispatch.secondCall.args;
        expect(action).to.deep.equal({
          type: 'GET_PROJECT_SUCCESS',
          payload: {
            project: expectedProject
          }
        });
      });
    });
  });
});
