export let reducers = {
  boring: function(prevState = {}, action) {
    switch (action.type) {
      case 'RECEIVE_BORING_VALUE':
        let nextState = {
          value: action.payload.value
        };
        return nextState;
      default:
        return prevState;
    }
    return prevState;
  }
};

export default {
  reducers,
};
