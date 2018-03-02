import {
  SubmissionError
} from 'redux-form/immutable';

import apiService from './api';

const errorData = { _error: 'Submission error' };

const storiesService = {
  createStory(values) {
    return apiService
      .post('/stories', values.toJS())
      .then(({ data }) => data)
      .catch(() => {
        throw new SubmissionError(errorData);
      });
  },

  getStory(id) {
    return apiService
      .get(`/stories/${id}`)
      .then(({ data }) => data);
  }
};

export default storiesService;
