import TestUtils from  'react-addons-test-utils';

import { QuizItemAnswerInput } from '../QuizItemAnswerInput';
import TestHelpers from '../../utils/TestHelpers.js';


describe("QuizItemAnswerInput", function() {

  let fixtures = TestHelpers.genFixtures();

  let defaultProps = {
    quizItem: fixtures.quizItems[0],
  };

  let renderers = TestHelpers.genRenderers({
    componentClass: QuizItemAnswerInput,
    defaultProps,
  });

  describe("answer buttons", function() {
    let _testOptions = function({ rendered, testFn }) {
      let options = rendered.props.quizItem.options;
      let renderedOptions = rendered.refs.options;
      for (let idx in options) {
        let option = options[idx];
        let renderedOption = renderedOptions.children[idx];
        testFn({ idx, option, renderedOption });
      }
    }


    it("renders answer buttons for each option", function() {
      let rendered = renderers.renderWithProps();
      _testOptions({
        rendered,
        testFn: ({ idx, option, renderedOption }) => {
          expect(renderedOption.innerHTML)
          .toContain(option);
        }
      });
    });

    it("triggers props.submitAnswer on click for each answer", function() {
      let submitAnswerSpy = jasmine.createSpy();
      let rendered = renderers.renderWithProps({
        submitAnswer: submitAnswerSpy,
      });
      _testOptions({
        rendered,
        testFn: ({ idx, option, renderedOption }) => {
          TestUtils.Simulate.click(renderedOption);
          expect(submitAnswerSpy.calls.argsFor(idx)[0])
            .toEqual({
              submission: option,
            });
        }
      });
    });
  });

});
