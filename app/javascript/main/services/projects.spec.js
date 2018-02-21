import apiService from './api';
import projectsService from './projects';

describe('services/projects', function() {
  beforeEach(function() {
    this.sandbox = sandbox.create();
  });

  afterEach(function() {
    this.sandbox.restore();
  });

  describe('getProjects', function() {
    let expectedProjects;
    let get;
    let promise;

    beforeEach(function() {
      expectedProjects = fixture.generate('project', faker.random.number({ min: 1, max: 10 }));
      get = this.sandbox.stub(apiService, 'get').callsFake(() => {
        return Promise.resolve({
          data: expectedProjects
        });
      });

      promise = projectsService.getProjects();
    });

    it('gets a list of all projects', function() {
      return promise.then(() => {
        expect(get.calledOnce).to.be.true;
        const [url] = get.firstCall.args;
        expect(url).to.equal('/projects');
      });
    });
  });

  describe('getProject', function() {
    let expectedProject;
    let get;
    let promise;

    beforeEach(function() {
      expectedProject = fixture.generate('project');
      get = this.sandbox.stub(apiService, 'get').callsFake(() => {
        return Promise.resolve({
          data: expectedProject
        });
      });

      promise = projectsService.getProject(expectedProject.id);
    });

    it('gets the project', function() {
      return promise.then(() => {
        expect(get.calledOnce).to.be.true;
        const [url] = get.firstCall.args;
        expect(url).to.equal(`/projects/${expectedProject.id}`);
      });
    });
  });
});
