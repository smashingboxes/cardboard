// import actionTypes from '../constants/actionTypes';
// import projectsService from '../services/projects';

// function getProjectsStart() {
//   return {
//     type: actionTypes.GET_PROJECTS_START
//   };
// }

// function getProjectsSuccess(projects) {
//   return {
//     type: actionTypes.GET_PROJECTS_SUCCESS,
//     payload: { projects }
//   };
// }

// function getProjects() {
//   return function(dispatch) {
//     dispatch(getProjectsStart());

//     return projectsService
//       .getProjects()
//       .then((projects) => dispatch(getProjectsSuccess(projects)));
//   };
// }

// function getProjectStart() {
//   return {
//     type: actionTypes.GET_PROJECT_START
//   };
// }

// function getProjectSuccess(project) {
//   return {
//     type: actionTypes.GET_PROJECT_SUCCESS,
//     payload: { project }
//   };
// }

// function getProject(projectId) {
//   return function(dispatch) {
//     dispatch(getProjectStart());

//     return projectsService
//       .getProject(projectId)
//       .then((project) => dispatch(getProjectSuccess(project)));
//   };
// }

// export {
//   getProjects,
//   getProject
// };

import api from '../utils/api';

const getProjects = api.actions().projects.list;
const getProject = api.actions().projects.retrieve;

export {
  getProjects,
  getProject
};
