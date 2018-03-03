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
  // TODO: Do the rest of the operations
  default:
    return null;
  }
}

export default createService;
