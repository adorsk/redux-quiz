import TestHelpers from '../../utils/TestHelpers';
import { QuizItem } from '../QuizItem'; 


describe("QuizItem", function() {

  let fixtures = TestHelpers.genFixtures();
  let fixtureGens = TestHelpers.genFixtureGens();

  let defaultProps = {
    quizItem: fixtures.quizItems[0],
  };

  let renderers = TestHelpers.genRenderers({
    componentClass: QuizItem,
    defaultProps,
  });

  describe("question", function() {
    it("renders the question", function() {
      let rendered = renderers.renderWithProps();
      expect(rendered.refs.question.innerHTML)
        .toContain(rendered.props.quizItem.question);
    });
  });

  describe("when it has no submission", function() {
    let rendered;
    let itemWithoutSubmission = fixtureGens.genQuizItem({
      withoutSubmission: true,
    });

    beforeEach(function () {
      rendered = renderers.renderWithProps({
        quizItem: itemWithoutSubmission,
      });
    });

    it("renders answer input", function() {
      expect(rendered.refs.answerInput).toBeTruthy();
    });

    it ("does not render result", function() {
      expect(rendered.refs.result).toBeFalsy();
    });
  });

  describe("when it has submission", function() {
    let rendered;
    let itemWithSubmission = fixtureGens.genQuizItem({
      withCorrectSubmission: true,
    });

    beforeEach(function () {
      rendered = renderers.renderWithProps({
        quizItem: itemWithSubmission,
      });
    });

    it("renders quiz item result", function() {
      expect(rendered.refs.result).toBeTruthy();
    });

    it("does not render answer input", function() {
      expect(rendered.refs.answerInput).toBeFalsy();
    });
  });
});
