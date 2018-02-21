import apiService from './api';

const projectsService = {
  getProjects() {
    return apiService
      .get('/projects')
      .then(({ data }) => data);
  },

  getProject(projectId) {
    return apiService
      .get(`/projects/${projectId}`)
      .then(({ data }) => data);
  }
};

export default projectsService;
