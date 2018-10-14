import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <div>
    <h1>
      404. Page not found{' '}
      <span role="img" aria-labelledby="Rocket">
        🚀
      </span>
    </h1>
    <Link to="/">Go to Home page</Link>
  </div>
);

export default PageNotFound;
