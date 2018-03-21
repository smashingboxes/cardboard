import {
  bindActionCreators
} from 'redux';

import createService from './createService';
import createAction from './createAction';
import { createListReducer, createItemReducer } from './reducerCreators';

const OPERATIONS = ['list', 'show', 'update', 'create', 'delete'];

class Api {
  /*
    config = {
      resources: {
        projects: {},
        stories: {}
      }
    }
  */
  constructor(config) {
    this.config = config;
    this.services = this.buildServices();
    this.actions = this.buildActions();
    this.reducers = this.buildReducers();
  }

  bindResourceActions(dispatch) {
    return Object.keys(this.actions).reduce((memo, resource) => {
      const actions = this.actions[resource];
      memo[resource] = bindActionCreators(actions, dispatch);
      return memo;
    }, {});
  }

  /*
    returns something like:
    {
      projects: {
        list: function,
        show: function,
        ...
      },
      stories: {
        list: function,
        show: function,
        ...
      }
    }
  */
  buildServices() {
    return Object.keys(this.config.resources).reduce((resourceMemo, resource) => {
      // const resourceConfig = this.config.resources[resource];
      resourceMemo[resource] = OPERATIONS.reduce((operationMemo, operation) => {
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
        show: function,
        ...
      },
      stories: {
        list: function,
        show: function,
        ...
      }
    }
  */
  buildActions() {
    return Object.keys(this.config.resources).reduce((resourceMemo, resource) => {
      // const resourceConfig = this.config.resources[resource];
      resourceMemo[resource] = OPERATIONS.reduce((operationMemo, operation) => {
        operationMemo[operation] = createAction(resource, operation, this.services);
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
  buildReducers() {
    return Object.keys(this.config.resources).reduce((memo, resource) => {
      // const resourceConfig = this.config.resources[resource];
      const listIndex = OPERATIONS.indexOf('list');
      let itemOperations;

      if (listIndex !== 1) {
        // Remove 'list' from the operations
        itemOperations = OPERATIONS.filter((operation) => operation !== 'list');
        // Set up the list reducer
        memo[resource] = createListReducer(resource, OPERATIONS);
      }
      if (itemOperations && itemOperations.length > 0) {
        // TODO: Change this from Item to singular
        memo[`${resource}Item`] = createItemReducer(resource, OPERATIONS);
      }
      return memo;
    }, {});
  }
}

export default Api;
