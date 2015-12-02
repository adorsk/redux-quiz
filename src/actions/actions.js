export let ActionCreators = {
  fetchQuizItems: function() {
    let thunk = function (dispatch) {
      var xhr = new XMLHttpRequest();
      xhr.open('get', '/data/pastaOrComposer.json', true);
      xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
          let rawQuizItems = JSON.parse(xhr.responseText);
          let parsedQuizItems = [];
          for (let rawQuizItem of rawQuizItems) {
            parsedQuizItems.push({
              question: rawQuizItem.name,
              options: ['pasta', 'composer'],
              answer: {
                key: rawQuizItem.type,
                imgSrc: rawQuizItem.img,
                text: rawQuizItem.description,
              }
            });
          }
          dispatch({
            type: 'RECEIVE_QUIZ_ITEMS',
            payload: {
              quizItems: parsedQuizItems,
            }
          });
        } else {
          console.error('Error !');
        }
      };
      xhr.send();
    }
    return thunk;
  },

  submitAnswer: function(kwargs) {
    let { quizItemIndex, submission } = kwargs;
    return {
      type: 'RECEIVE_QUIZ_ITEM_ANSWER',
      payload: {
        quizItemIndex,
        submission,
      }
    };
  },

  incrementQuizItemIndex: function() {
    return {
      type: 'INCREMENT_QUIZ_ITEM_INDEX',
    };
  }

};

export default {
  ActionCreators,
};
