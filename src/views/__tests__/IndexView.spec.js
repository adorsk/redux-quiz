import TestHelpers from '../../utils/TestHelpers';
import { IndexView } from '../IndexView';
import { ActionCreators } from '../../actions/actions';


describe("IndexView", function() {

  let fixtures = TestHelpers.genFixtures();

  let dispatchSpy = jasmine.createSpy();

  let defaultProps = {
    dispatch: dispatchSpy,
    quizItems: fixtures.quizItems,
  };

  let renderers = TestHelpers.genRenderers({
    componentClass: IndexView,
    defaultProps,
  });

  beforeEach( function() {
    spyOn(ActionCreators, 'fetchQuizItems');
  });

  describe("when mounting", function() {
    it("triggers quiz items fetch", function() {
      let rendered = renderers.renderWithProps();
      expect(ActionCreators.fetchQuizItems).toHaveBeenCalled();
    });
  });

  describe("after mounting", function() {
    it("renders quiz item component for current quiz item", function() {
      let quizItemIndex = 1;
      let rendered = renderers.renderWithProps({
        quizItemIndex,
      });
      expect(rendered.refs.quizItem.props.quizItem)
        .toBe(rendered.props.quizItems[quizItemIndex]);
    });

    describe("when quizItemIndex exceeds # quizItems", function() {
      it("renders 'done' message", function() {
        let quizItemIndex = defaultProps.quizItems.length;
        let rendered = renderers.renderWithProps({
          quizItemIndex,
        });
        expect(rendered.refs.quizItem).toBeFalsy();
        expect(rendered.refs.doneMessage).toBeTruthy();
      });
    });
  });
});
