import createService from './createService';
import createAction from './createAction';
import { createListReducer, createItemReducer } from './createReducer';

class Api {
  /*
    config = {
      resources: {
        projects: ['list', 'retrieve'],
        stories: ['retrieve', 'create']
      }
    }
  */
  constructor(config) {
    this.config = config;
  }

  /*
    returns something like:
    {
      projects: {
        list: function
        retrieve: function
      },
      stories: {
        retrieve: function,
        create: function
      }
    }
  */
  services() {
    return Object.keys(this.config.resources).reduce((resourceMemo, resource) => {
      const operations = this.config.resources[resource];
      resourceMemo[resource] = operations.reduce((operationMemo, operation) => {
        operationMemo[operation] = createService(resource, operation);
        return operationMemo;
      }, {});
      return resourceMemo;
    }, {});
  }

  /*
    returns something like:
    {
      projects: {
        list: function,
        retrieve: function
      },
      stories: {
        retrieve: function,
        create: function
      }
    }
  */
  actions() {
    return Object.keys(this.config.resources).reduce((resourceMemo, resource) => {
      const operations = this.config.resources[resource];
      resourceMemo[resource] = operations.reduce((operationMemo, operation) => {
        operationMemo[operation] = createAction(resource, operation, this.services());
        return operationMemo;
      }, {});
      return resourceMemo;
    }, {});
  }

  /*
    returns something like
    {
      projects: function,
      projectsItem: function,
      stories: function,
      storiesItem: function
    }
  */
  reducers() {
    return Object.keys(this.config.resources).reduce((memo, resource) => {
      const operations = this.config.resources[resource];
      const listIndex = operations.indexOf('list');
      let itemOperations;

      if (listIndex !== 1) {
        // Remove 'list' from the operations
        itemOperations = operations.filter((operation) => operation !== 'list');
        // Set up the list reducer
        memo[resource] = createListReducer(resource, operations);
      }
      if (itemOperations && itemOperations.length > 0) {
        // TODO: Change this from Item to singular
        memo[`${resource}Item`] = createItemReducer(resource, operations);
      }
      return memo;
    }, {});
  }
}

export default Api;

/*
  const api = new Api({
    base: '/api/v1',
    resources: {
      projects: ['list', 'retrieve'],
      stories: ['retrieve', 'create']
    }
  })

  // In actions/index.js
  export api.actions();

  // In reducers/index.js
  export default combineReducers(
    api.reducers()
  );

  // In services/index.js
  export default api.services();
*/
