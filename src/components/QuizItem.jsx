import React from 'react';

import QuizItemQuestion from './QuizItemQuestion';
import QuizItemResult from './QuizItemResult';


export class QuizItem extends React.Component {
  render () {
    return (
      <div>
        {(() => {
          if (this.props.quizItem.submission) {
            return <QuizItemResult
              ref="result" 
              quizItem={this.props.quizItem} 
              incrementQuizItemIndex={this.props.incrementQuizItemIndex}
            />
          } else {
            return <QuizItemQuestion
              ref="question" 
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
