import React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import history from '../history';
import Main from '../components/main';
import NotFound from '../components/NotFound';
import routes from '../constants/routes';
import ProjectsList from '../containers/Projects/List';
import ProjectShow from '../containers/Projects/Show';
import StoryNew from '../containers/Stories/New';
import StoryShow from '../containers/Stories/Show';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={routes.ROOT.path} component={Main} />
        <Route exact path={routes.PROJECTS.path} component={ProjectsList} />
        <Route exact path={routes.PROJECT.path} component={ProjectShow} />
        <Route exact path={routes.STORY_NEW.path} component={StoryNew} />
        <Route exact path={routes.STORY.path} component={StoryShow} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
