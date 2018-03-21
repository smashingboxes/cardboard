import PropTypes from 'prop-types';
import React, {
  Component
} from 'react';
import {
  connect
} from 'react-redux';

import api from '../../utils/api';
import StoryShow from '../../components/Stories/Show';

const propTypes = {
  actions: PropTypes.shape({
    stories: PropTypes.shape({
      show: PropTypes.func.isRequired
    }).isRequired
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      storyId: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  isLoading: PropTypes.bool.isRequired
};

class ConnectedStoryShow extends Component {
  componentDidMount() {
    this.props.actions.stories.show(this.props.match.params.storyId);
  }

  render() {
    if (this.props.isLoading) {
      return <div>Loading...</div>;
    }
    return <StoryShow {...this.props} />;
  }
}

ConnectedStoryShow.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    story: state.storiesItem.data,
    isLoading: !state.storiesItem.isFetched
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: api.bindResourceActions(dispatch)
  };
}

export {
  ConnectedStoryShow as StoryShow
};
export default connect(mapStateToProps, mapDispatchToProps)(ConnectedStoryShow);
