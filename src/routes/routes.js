import React from 'react';
import { IndexRoute, Route } from 'react-router';

import AppContainer from '../containers/AppContainer';
import IndexContainer from '../containers/IndexContainer';


export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={IndexContainer}/>
  </Route>
);
