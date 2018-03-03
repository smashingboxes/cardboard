import PropTypes from 'prop-types';
import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import {
  bindActionCreators,
  compose
} from 'redux';
import {
  reduxForm,
  getFormValues
} from 'redux-form';

import * as projectActionCreators from '../../actions/projects';
import storiesService from '../../services/stories';
import StoryNew from '../../components/Stories/New';
import routes from '../../constants/routes';

const propTypes = {
  actions: PropTypes.shape({
    projects: PropTypes.shape({
      getProject: PropTypes.func.isRequired
    }).isRequired
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      projectId: PropTypes.string.isRequired
    })
  })
};

class ConnectedStoryNew extends Component {
  componentDidMount() {
    this.props.actions.projects.getProject(this.props.match.params.projectId);
  }

  render() {
    return <StoryNew {...this.props} />;
  }
}

ConnectedStoryNew.propTypes = propTypes;

const formName = 'createStory';

function mapStateToProps(state) {
  return {
    formValues: getFormValues(formName)(state),
    initialValues: {
      projectId: state.project.data.id
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      projects: bindActionCreators(projectActionCreators, dispatch)
    }
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
      return storiesService.create(values.toJS());
    },
    enableReinitialize: true,
    keepDirtyOnReinitialize: true,
    onSubmitSuccess: handleSubmitSuccess
  })
)(ConnectedStoryNew);
