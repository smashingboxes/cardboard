import PropTypes from 'prop-types';
import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import {
  compose
} from 'redux';
import {
  reduxForm,
  getFormValues
} from 'redux-form';

import api from '../../utils/api';
import StoryNew from '../../components/Stories/New';
import routes from '../../constants/routes';

const propTypes = {
  actions: PropTypes.shape({
    projects: PropTypes.shape({
      show: PropTypes.func.isRequired
    }).isRequired
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      projectId: PropTypes.string.isRequired
    })
  }),
  isLoading: PropTypes.bool.isRequired
};

class ConnectedStoryNew extends Component {
  componentDidMount() {
    this.props.actions.projects.show(this.props.match.params.projectId);
  }

  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }
    return <StoryNew {...this.props} />;
  }
}

ConnectedStoryNew.propTypes = propTypes;

const formName = 'createStory';

function mapStateToProps(state) {
  return {
    formValues: getFormValues(formName)(state),
    initialValues: {
      projectId: state.projectsItem.data.id
    },
    project: state.projectsItem.data,
    isLoading: !state.projectsItem.isFetched
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: api.bindResourceActions(dispatch)
  };
}

function handleSubmitSuccess(response, _, { history }) {
  history.push(routes.STORY.build({ storyId: response.id }));
}

export {
  ConnectedStoryNew as ProjectShow
};
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({
    form: formName,
    onSubmit: (values) => {
      return api.services.stories.create(values);
    },
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    onSubmitSuccess: handleSubmitSuccess
  })
)(ConnectedStoryNew);
