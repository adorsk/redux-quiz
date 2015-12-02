import { reducers } from '../reducers';
import TestHelpers from '../../utils/TestHelpers';


describe('reducers', function() {

  let fixtures = TestHelpers.genFixtures();
  let mockQuizItems = fixtures.quizItems;

  describe('quizItems', function() {
    it('handles RECEIVE_QUIZ_ITEMS', function() {
      let state1 = [];
      let mockAction = {
        type: 'RECEIVE_QUIZ_ITEMS',
        payload: {
          quizItems: mockQuizItems,
        }
      };
      let state2 = reducers.quizItems(state1, mockAction);
      expect(state2).toEqual(mockQuizItems);
    });

    it('handles RECEIVE_QUIZ_ITEM_ANSWER', function() {
      let state1 = mockQuizItems;
      let mockSubmission = 'mockSubmission';
      let quizItemIndex = 1;
      let mockAction = {
        type: 'RECEIVE_QUIZ_ITEM_ANSWER',
        payload: {
          quizItemIndex,
          submission: mockSubmission,
        }
      };
      let expectedUpdatedQuizItem = Object.assign(
        {}, mockQuizItems[quizItemIndex], {submission: mockSubmission});
      let state2 = reducers.quizItems(state1, mockAction);
      expect(state2[quizItemIndex]).toEqual(expectedUpdatedQuizItem);
    });
  });

  describe('quizItemIndex', function() {
    it('handles INCREMENT_QUIZ_ITEM_INDEX', function() {
      let state1 = 0;
      let state2 = reducers.quizItemIndex(state1, {
        type: 'INCREMENT_QUIZ_ITEM_INDEX',
      });
      expect(state2).toEqual(1);
    });
  });
});
