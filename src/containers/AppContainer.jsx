import React, { Component } from 'react';


export class AppContainer extends Component {
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default AppContainer;
