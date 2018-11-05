import React from 'react';
import { Link } from 'react-router-dom';

import routes from 'routes/routes';

const {
  index,
  pageTwo,
} = routes;

export const NavBar = () => (
  <nav>
    <div>Logo here</div>
    <div>
      <Link to={index.route}>Index</Link>
      <Link to={pageTwo.route}>Page 2</Link>
    </div>
  </nav>
);
