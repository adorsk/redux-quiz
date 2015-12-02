import TestUtils from 'react-addons-test-utils';

import TestHelpers from '../../utils/TestHelpers';
import { QuizItemResult } from '../QuizItemResult';


describe("QuizItemResult", function() {

  let fixtureGens = TestHelpers.genFixtureGens();

  let defaultProps = {
    quizItem: fixtureGens.genQuizItem({
      key: 'mockitem',
      withCorrectSubmission: true,
    })
  };

  let renderers = TestHelpers.genRenderers({
    componentClass: QuizItemResult,
    defaultProps,
  });

  describe("evaluation", function() {
    let rendered;

    describe("when submission is correct", function() {
      beforeEach(function () {
        let itemWithCorrectSubmission = fixtureGens.genQuizItem({
          withCorrectSubmission: true,
        });
        rendered = renderers.renderWithProps({
          quizItem: itemWithCorrectSubmission,
        });
      });

      it("renders evaluation as correct", function() {
        expect(rendered.refs.evaluation.innerHTML)
          .toContain('correct');
      });
    });

    describe("when submission is incorrect", function() {
      beforeEach(function () {
        let itemWithIncorrectSubmission = fixtureGens.genQuizItem({
          withIncorrectSubmission: true,
        });
        rendered = renderers.renderWithProps({
          quizItem: itemWithIncorrectSubmission,
        });
      });

      it("renders evaluation as incorrect", function() {
        expect(rendered.refs.evaluation.innerHTML)
          .toContain('incorrect');
      });
    });
  });

  it("renders answer text", function() {
    let rendered = renderers.renderWithProps();
    expect(rendered.refs.answerText.innerHTML)
      .toContain(rendered.props.quizItem.answer.text);
  });

  it("renders answer image", function() {
    let rendered = renderers.renderWithProps();
    expect(rendered.refs.answerImg.getAttribute('src'))
      .toEqual(rendered.props.quizItem.answer.imgSrc);
  });

  describe("'next' button", function() {
    it("triggers incrementQuizItemIndex on click", function() {
      let incrementQuizItemIndexSpy = jasmine.createSpy();
      let rendered = renderers.renderWithProps({
        incrementQuizItemIndex: incrementQuizItemIndexSpy,
      });
      TestUtils.Simulate.click(rendered.refs.nextButton);
      expect(incrementQuizItemIndexSpy).toHaveBeenCalled();
    });
  });

});
