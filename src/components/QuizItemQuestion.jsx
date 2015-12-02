import React from 'react';


export class QuizItemQuestion extends React.Component {
  render () {
    return (
      <div>

        <div ref="question">
          {this.props.quizItem.question}
        </div>

        <div ref="options">
          {(() => {
            let renderedOptions = [];
            for (let option of this.props.quizItem.options) {
              renderedOptions.push(
                <div
                  key={option}
                  onClick={() => {
                    this.props.submitAnswer({
                      submission: option
                    });
                  }}
                  >
                  {option}
                </div>
              );
            }
            return renderedOptions;
          })()}
        </div>

      </div>
    );
  }
}

export default QuizItemQuestion;
