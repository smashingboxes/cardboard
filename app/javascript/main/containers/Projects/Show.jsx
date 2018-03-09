import PropTypes from 'prop-types';
import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';
import {
  bindActionCreators
} from 'redux';

import * as projectActionCreators from '../../actions/projects';
import ProjectShow from '../../components/Projects/Show';

const propTypes = {
  actions: PropTypes.shape({
    projects: PropTypes.shape({
      getProject: PropTypes.func.isRequired
    }).isRequired
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      projectId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  isLoading: PropTypes.bool.isRequired
};

class ConnectedProjectShow extends Component {
  componentDidMount() {
    this.props.actions.projects.getProject(this.props.match.params.projectId);
  }

  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }
    return <ProjectShow {...this.props} />;
  }
}

ConnectedProjectShow.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    project: state.project.data,
    isLoading: !state.project.isFetched
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      projects: bindActionCreators(projectActionCreators, dispatch)
    }
  };
}

export {
  ConnectedProjectShow as ProjectShow
};
export default connect(mapStateToProps, mapDispatchToProps)(ConnectedProjectShow);
