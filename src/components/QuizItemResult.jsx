import React from 'react';

export class QuizItemResult extends React.Component {
  render () {
    let answer = this.props.quizItem.answer;
    let evaluation = this._getEvaluation();
    let evaluationClassName = (evaluation === 'correct') ? 'success' : 'danger';

    return (
      <div>
        <div ref="evaluation">
          <div className={`alert alert-${evaluationClassName} text-center`}>
            {evaluation}
          </div>
        </div>

        <div className="row">
          <div className="answer">
            <div className="col-xs-8">
              <div ref="answerText" style={{fontSize: "150%"}}>
              {answer.text}
              </div>
            </div>
            <div className="col-xs-4 text-center">
              <img ref="answerImg" src={answer.imgSrc} 
                style={{height: "160px", margin: "10px"}}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="btn-group btn-grou-lg btn-group-justified">
            <a ref="nextButton"
              onClick={() => {
                this.props.incrementQuizItemIndex();
              }}
              role="button"
              href="javascript:null"
              className="btn btn-primary btn-justified"
              >
              next
            </a>
          </div>
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
