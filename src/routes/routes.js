import React from 'react';
import { IndexRoute, Route } from 'react-router';

import AppContainer from '../containers/AppContainer';
import IndexView from '../views/IndexView';


export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={IndexView}/>
  </Route>
);
