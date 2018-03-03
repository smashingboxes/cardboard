import api from '../utils/api';

const getProjects = api.actions.projects.list;
const getProject = api.actions.projects.retrieve;

export {
  getProjects,
  getProject
};
