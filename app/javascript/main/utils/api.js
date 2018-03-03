import Api from './restfulApi';

const api = new Api({
  resources: {
    projects: ['list', 'retrieve'],
    stories: ['retrieve', 'create']
  }
});

export default api;
