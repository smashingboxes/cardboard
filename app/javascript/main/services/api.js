import axios from 'axios';
import changeObjectCase from 'change-object-case';
import _ from 'lodash';
import history from '../history';

const CHANGECASE_OPTIONS = {
  arrayRecursive: true,
  recursive: true,
  throwOnDuplicate: true
};

const apiService = {
  applyInterceptors(manager, interceptors) {
    interceptors.forEach((interceptor) => {
      manager.use(interceptor.fulfilled, interceptor.rejected);
    });
  },

  changeCase(data, to) {
    const type = _.isArray(data) ? 'Array' : 'Keys';

    return changeObjectCase[`${to}${type}`](data, CHANGECASE_OPTIONS);
  },

  create(options = {}) {
    const api = axios.create({
      baseURL: '/api/v1'
    });
    const requestInterceptors = [
      { fulfilled: apiService.transformRequest },
      ...(options.requestInterceptors || [])
    ];
    const responseInterceptors = [
      { fulfilled: apiService.transformResponse, rejected: apiService.handleError },
      ...(options.responseInterceptors || [])
    ];

    apiService.applyInterceptors(api.interceptors.request, requestInterceptors);
    apiService.applyInterceptors(api.interceptors.response, responseInterceptors);

    return api;
  },

  handleError(error) {
    if (error.response.status === 401 || error.response.status === 502) {
      history.push('/login');
    }

    return Promise.reject(error);
  },

  transformRequest(config) {
    config.headers = { 'Content-Type': 'application/json' };

    if (config.data) {
      config.data = apiService.changeCase(config.data, 'snake');
    }

    if (config.params) {
      config.params = apiService.changeCase(config.params, 'snake');
    }

    return config;
  },

  transformResponse(response) {
    response.data = apiService.changeCase(response.data, 'camel');

    return response;
  }
};

export const apiFactory = {
  create: apiService.create
};
export default apiService.create();
