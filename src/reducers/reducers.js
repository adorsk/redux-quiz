import { combineReducers } from 'redux';


export let reducers = {
  quizItems: function(prevState = [], action) {
    let nextState;
    switch (action.type) {
      case 'RECEIVE_QUIZ_ITEMS':
        nextState = action.payload.quizItems;
        return nextState;
      case 'RECEIVE_QUIZ_ITEM_ANSWER':
        nextState = [].concat(prevState);
        let { quizItemIndex, submission } = action.payload;
        let updatedQuizItem = Object.assign(
          {}, nextState[quizItemIndex], { submission });
        nextState[quizItemIndex] = updatedQuizItem;
        return nextState;
      default:
        nextState = prevState;
        return nextState;
    }
  },

  quizItemIndex: function(prevState = 0, action) {
    let nextState;
    switch (action.type) {
      case 'INCREMENT_QUIZ_ITEM_INDEX':
        nextState = prevState + 1;
        return nextState;
      default:
        nextState = prevState;
        return nextState;
    }
  }
};

export let rootReducer = combineReducers(reducers);

export default {
  reducers,
  rootReducer,
};
