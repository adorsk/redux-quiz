import React from 'react';

export class QuizItemResult extends React.Component {
  render () {
    let evaluation = this._getEvaluation();
    let answer = this.props.quizItem.answer;

    return (
      <div>
        <div ref="evaluation" className={evaluation}>
          {evaluation}
        </div>

        <div className="answer">
          <div ref="answerText">
            {answer.text}
          </div>
          <img ref="answerImg" src={answer.imgSrc} />
        </div>

        <div ref="nextButton"
          onClick={() => {
            this.props.incrementQuizItemIndex();
          }} >
          next
        </div>
      </div>
    )
  }

  _getEvaluation () {
    let evaluation;
    let { submission, answer } = this.props.quizItem;
    if (submission === answer.key) {
      evaluation = 'correct';
    } else {
      evaluation = 'incorrect';
    }
    return evaluation;
  }
}

export default QuizItemResult;
