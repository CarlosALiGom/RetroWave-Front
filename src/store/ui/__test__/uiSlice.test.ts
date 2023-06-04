import {
  UiState,
  initialUiState,
  showLoadingActionCreator,
  uiReducer,
} from "../uiSlice";

describe("Given a uiReducer", () => {
  describe("When it receives a current state and a showLoading action", () => {
    test("Then it should change the ui state property isLoading to true", () => {
      const expectedUiState: UiState = {
        isLoading: true,
      };

      const showLoadingAction = showLoadingActionCreator();

      const newUiState = uiReducer(initialUiState, showLoadingAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
