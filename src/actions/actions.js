export let ActionCreators = {
  receiveBoringValue: function(value) {
    let action = {
      type: 'RECEIVE_BORING_VALUE',
      payload: { value }
    };
    return action;
  }
};

export default {
  ActionCreators,
};
