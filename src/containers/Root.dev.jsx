import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppContainer from './AppContainer';
import DevTools from './DevTools';
import createRouter from './Router';


export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          {createRouter()}
          <DevTools />
        </div>
      </Provider>
    );
  }
}
