import * as _JasmineAjax from 'jasmine-ajax'; // for mocking XmlHTTPRequests

import { ActionCreators } from '../actions';

describe("ActionCreators", function() {

  beforeEach(function () {
    jasmine.Ajax.install();
  });

  afterEach(function () {
    jasmine.Ajax.uninstall();
  });


  describe("fetchQuizItems", function() {
    let mockDispatch;

    let mockRawQuizItems = [];
    for (let i = 0; i < 3; i++) {
      mockRawQuizItems.push({
        "type": "pasta", 
        "name": `Matriciani-${i}`, 
        "img": `img-${i}`,
        "description": `description-${i}`,
      });
    }

    let _doFetchQuizItems = function () {
      mockDispatch = jasmine.createSpy();
      ActionCreators.fetchQuizItems()(mockDispatch);
    };

    it("makes fetch request", function() {
      _doFetchQuizItems();
      expect(jasmine.Ajax.requests.count())
        .toEqual(1);
      let request = jasmine.Ajax.requests.mostRecent();
      expect(request.url).toEqual('/data/pastaOrComposer.json');
    });

    describe("when fetch request succeeds", function() {
      it("calls dispatch with action", function() {
        _doFetchQuizItems();

        let request = jasmine.Ajax.requests.mostRecent();
        request.respondWith({
          status: 200,
          responseText: JSON.stringify(mockRawQuizItems),
        });

        let expectedQuizItems = [];
        for (let rawQuizItem of mockRawQuizItems) {
          expectedQuizItems.push({
            question: rawQuizItem.name,
            answer: {
              key: rawQuizItem.type,
              imgSrc: rawQuizItem.img,
              text: rawQuizItem.description,
            },
            options: ['pasta', 'composer'],
          });
        }

        expect(mockDispatch).toHaveBeenCalledWith({
          type: 'RECEIVE_QUIZ_ITEMS',
          payload: {
            quizItems: expectedQuizItems,
          }
        });
      });
    });
  });

  describe("incrementQuizItemIndex", function() {
    it("returns expected action", function() {
      let action = ActionCreators.incrementQuizItemIndex();
      expect(action).toEqual({
        type: 'INCREMENT_QUIZ_ITEM_INDEX'
      });
    });
  });
});
