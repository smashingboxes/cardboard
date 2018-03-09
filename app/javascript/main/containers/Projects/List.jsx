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
import ProjectList from '../../components/Projects/List';

const propTypes = {
  actions: PropTypes.shape({
    projects: PropTypes.shape({
      getProjects: PropTypes.func.isRequired
    }).isRequired
  }).isRequired
};

class ConnectedProjectList extends Component {
  componentDidMount() {
    this.props.actions.projects.getProjects();
  }

  render() {
    return <ProjectList {...this.props} />;
  }
}

ConnectedProjectList.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    projects: state.projects.data
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
  ConnectedProjectList as ProjectList
};
export default connect(mapStateToProps, mapDispatchToProps)(ConnectedProjectList);
