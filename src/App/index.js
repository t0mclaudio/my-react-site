import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Home from './Home';
import About from './About';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about-me">
        <About />
      </Route>
    </Switch>
  </Router >
)