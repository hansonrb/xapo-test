import React from 'react';
import { Route, Router, Switch } from 'react-router';
import App from './components/app';

import history from './helpers/history';

export default () => (
  <Router history={history}>
    <div id="routes">
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </div>
  </Router>
);
