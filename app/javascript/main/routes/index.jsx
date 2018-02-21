import React from 'react';
import {
  Router,
  Route,
  Switch
} from 'react-router-dom';
import history from '../history';
import Main from '../components/main';
import ProjectsList from '../containers/Projects/List';
import ProjectShow from '../containers/Projects/Show';

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/projects" component={ProjectsList} />
        <Route exact path="/projects/:projectId" component={ProjectShow} />
      </Switch>
    </Router>
  );
}

export default Routes;
