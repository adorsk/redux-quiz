import React from 'react';
import { Router } from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';

import routes from '../routes/routes.js';

const createRouter = function() {
  return <Router history={createHistory()} children={routes} />;
}

export default createRouter;
