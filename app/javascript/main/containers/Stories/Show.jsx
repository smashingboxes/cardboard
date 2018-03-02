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

import * as storiesActionCreators from '../../actions/stories';
import StoryShow from '../../components/Stories/Show';

const propTypes = {
  actions: PropTypes.shape({
    stories: PropTypes.shape({
      getStory: PropTypes.func.isRequired
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
    this.props.actions.stories.getStory(this.props.match.params.storyId);
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
    story: state.getIn(['story', 'data']),
    isLoading: !state.getIn(['story', 'isFetched'])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      stories: bindActionCreators(storiesActionCreators, dispatch)
    }
  };
}

export {
  ConnectedStoryShow as StoryShow
};
export default connect(mapStateToProps, mapDispatchToProps)(ConnectedStoryShow);
