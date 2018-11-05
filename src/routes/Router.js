import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { NavBar } from 'layouts/NavBar/NavBar';

import routes from './routes';

const {
  index,
  pageTwo,
} = routes;

export const AppRouter = () => (
  <Router>
    <div>
      <NavBar />
      <Route path={index.route} exact component={index.component} />
      <Route path={pageTwo.route} component={pageTwo.component} />
    </div>
  </Router>
);
