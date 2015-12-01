import * as _ from 'lodash';
import React       from 'react';
import { connect } from 'react-redux';

import { ActionCreators } from '../actions/actions';
import { BoringComponent } from '../components/BoringComponent';


export class IndexView extends React.Component {

  static defaultProps = {
    boring: {},
  };

  render () {
    return (
      <div>
        <BoringComponent
          boringProp={this.props.boring.value}
          setBoringValue={(newValue) => {this._setBoringValue(newValue)}}
        />
      </div>
    );
  }

  _setBoringValue(newValue) {
    this.props.dispatch(ActionCreators.receiveBoringValue(newValue));
  }

}

const mapStateToProps = (state) => {
  return {
    boring: state.boring,
  };
};

export default connect(mapStateToProps)(IndexView);
