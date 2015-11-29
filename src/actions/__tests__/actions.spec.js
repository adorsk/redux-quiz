import { ActionCreators } from '../actions';

describe("ActionCreators", function() {
  describe("receiveBoringValue", function() {
    it("creates a boring action", function() {
      let mockValue = 'a boring mock value';
      let actualAction = ActionCreators.receiveBoringValue(mockValue);
      expect(actualAction).toEqual({
        type: 'RECEIVE_BORING_VALUE',
        payload: {
          value: mockValue
        }
      });
    });
  });
});
