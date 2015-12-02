import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createRouter from './Router';

export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        {createRouter()}
      </Provider>
    );
  }
}
