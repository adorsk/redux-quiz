import { reducers } from '../reducers';


describe('reducers', function() {
  describe('boring', function() {
    it('handles RECEIVE_BORING_VALUE', function() {
      let mockInitialState = '';
      let mockBoringAction = {
        type: 'RECEIVE_BORING_VALUE',
        payload: {
          value: 'mockValue'
        }
      };
      let actualNextState = reducers.boring(mockInitialState, mockBoringAction);
      expect(actualNextState).toEqual({
        value: mockBoringAction.payload.value
      });
    });
  });
});
