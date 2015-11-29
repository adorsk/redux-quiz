import React from 'react';

import { ActionCreators } from  '../actions/actions';


export class BoringComponent extends React.Component {

  static defaultProps = {
    boringProp: 'default boring value'
  };

  constructor (props) {
    super(props);

    this.state = {
      currentValue: this.props.boringProps
    };
  }

  render () {
    return (
      <div>
        This is a boring component. Consider spicing it up...
        <br/>
        <input
          value={this.state.currentValue}
          onChange={(e) => {this.setState({currentValue: e.target.value})}}
        />
        <br/>
        current value: <span>{this.props.boringProp}</span>
        <br/>
        <button
          onClick={() => this._setBoringValue() }
          >set new value!</button>
      </div>
    );
  }

  _setBoringValue () {
    this.props.setBoringValue(this.state.currentValue);
  }
}

export default BoringComponent;
