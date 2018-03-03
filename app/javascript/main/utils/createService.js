import apiService from '../services/api';

// resource = 'stories'
// operation = 'list'
function createService(resource, operation) {
  switch (operation) {
  case 'list':
    return () => {
      return apiService
        .get(`/${resource}`)
        .then(({ data }) => data);
    };
  case 'retrieve':
    return (id) => {
      return apiService
        .get(`/${resource}/${id}`)
        .then(({ data }) => data);
    };
  case 'create':
    return (body) => {
      return apiService
        .post(`/${resource}`, body)
        .then(({ data }) => data);
    };
  case 'update':
    return (id, body) => {
      return apiService
        .put(`/${resource}/${id}`, body)
        .then(({ data }) => data);
    };
  case 'delete':
    return (id) => {
      return apiService
        .delete(`/${resource}/${id}`)
        .then(({ data }) => data);
    };
  default:
    return null;
  }
}

export default createService;
