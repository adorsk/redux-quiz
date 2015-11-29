import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import { Router } from 'react-router';
import createHistory from 'history/lib/createBrowserHistory';

import { reducers } from './reducers/reducers.js';

import routes from './routes/routes.js';

let middlewares = [];

if (process.env && process.env.NODE_ENV === 'development') {
  let loggerMiddleware = createLogger({collapsed: true});
  middlewares.push(loggerMiddleware);
}

middlewares.push(thunkMiddleware);

const createEnchancedStore = compose(
  applyMiddleware(...middlewares)
)(createStore);

const combinedReducers = combineReducers(reducers);

const store = createEnchancedStore(combinedReducers);


ReactDOM.render(
  <Provider store={store}>
    <Router history={createHistory()} children={routes} />
  </Provider>,
  document.getElementById('app-root')
);
