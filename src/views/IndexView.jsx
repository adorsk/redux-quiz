import * as _ from 'lodash';
import React       from 'react';
import { connect } from 'react-redux';

import { ActionCreators } from '../actions/actions';
import QuizItem from '../components/QuizItem';


export class IndexView extends React.Component {

  static defaultProps = {
    quizItemIndex: 0,
  }

  componentDidMount () {
    this.props.dispatch(ActionCreators.fetchQuizItems());
  }

  render () {
    let { quizItemIndex, quizItems } = this.props;
    return (
      <div className="container">
        <h1>Pasta or Composer?</h1>
        <div className="well well-lg">
          {(() => {
            if (quizItems && (quizItems.length > 0)) {
              if (quizItemIndex < this.props.quizItems.length) {
                return (
                  <QuizItem ref="quizItem"
                    quizItem={quizItems[quizItemIndex]}
                    submitAnswer={(kwargs) => {
                      this._submitAnswer(Object.assign({
                        quizItemIndex
                      }, kwargs));
                    }}
                    incrementQuizItemIndex={() => {
                      this._incrementQuizItemIndex()
                    }}
                  />
                )
              } else {
                return (
                  <div ref="doneMessage">
                    'done!'
                  </div>
                )
              }
            } else {
              return 'no quiz items!';
            }
          })()}
        </div>
      </div>
    );
  }

  _submitAnswer (kwargs) {
    this.props.dispatch(ActionCreators.submitAnswer(kwargs));
  }

  _incrementQuizItemIndex () {
    this.props.dispatch(ActionCreators.incrementQuizItemIndex());
  }

}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(IndexView);
