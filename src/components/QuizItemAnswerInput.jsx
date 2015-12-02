import React from 'react';


export class QuizItemAnswerInput extends React.Component {
  render () {
    return (
      <div>

        <div ref="options" className="btn-group btn-group-lg btn-group-justified">
          {(() => {
            let renderedOptions = [];
            for (let option of this.props.quizItem.options) {
              renderedOptions.push(
                <a
                  key={option}
                  onClick={() => {
                    this.props.submitAnswer({
                      submission: option
                    });
                  }}
                  role="button"
                  className="btn btn-primary"
                  href="javascript:null"
                  >
                  {option}
                </a>
              );
            }
            return renderedOptions;
          })()}
        </div>

      </div>
    );
  }
}

export default QuizItemAnswerInput;
