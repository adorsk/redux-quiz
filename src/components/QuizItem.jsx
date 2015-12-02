import React from 'react';

import QuizItemAnswerInput from './QuizItemAnswerInput';
import QuizItemResult from './QuizItemResult';


export class QuizItem extends React.Component {
  render () {
    return (
      <div>
        <h2 ref="question" className="text-center">{this.props.quizItem.question}</h2>
        {(() => {
          if (this.props.quizItem.submission) {
            return <QuizItemResult
              ref="result" 
              quizItem={this.props.quizItem} 
              incrementQuizItemIndex={this.props.incrementQuizItemIndex}
            />
          } else {
            return <QuizItemAnswerInput
              ref="answerInput" 
              quizItem={this.props.quizItem} 
              submitAnswer={this.props.submitAnswer}
            />
          }
        })()}
      </div>
    );
  }
}

export default QuizItem;
