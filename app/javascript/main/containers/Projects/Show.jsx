import PropTypes from 'prop-types';
import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';

import api from '../../utils/api';
import ProjectShow from '../../components/Projects/Show';

const propTypes = {
  actions: PropTypes.shape({
    projects: PropTypes.shape({
      show: PropTypes.func.isRequired
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
    this.props.actions.projects.show(this.props.match.params.projectId);
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
    project: state.projectsItem.data,
    isLoading: !state.projectsItem.isFetched
  };
}

function mapDispatchToProps(dispatch) {
  console.log(api.bindResourceActions(dispatch));
  return {
    actions: api.bindResourceActions(dispatch)
  };
}

export {
  ConnectedProjectShow as ProjectShow
};
export default connect(mapStateToProps, mapDispatchToProps)(ConnectedProjectShow);
