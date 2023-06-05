import {
  UiState,
  hideLoadingActionCreator,
  initialUiState,
  showErrorActionCreator,
  showLoadingActionCreator,
  uiReducer,
} from "../uiSlice";

describe("Given a uiReducer", () => {
  describe("When it receives a current state and a showLoading action", () => {
    test("Then it should change the ui state property isLoading to true", () => {
      const expectedUiState: UiState = {
        isLoading: true,
        isError: false,
        message: "",
      };

      const showLoadingAction = showLoadingActionCreator();

      const newUiState = uiReducer(initialUiState, showLoadingAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives a current state and a hideLoading action", () => {
    test("Then it should change the ui state property isLoading to false", () => {
      const expectedUiState: UiState = {
        isLoading: false,
        isError: false,
        message: "",
      };

      const hideLoadingAction = hideLoadingActionCreator();

      const newUiState = uiReducer(initialUiState, hideLoadingAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });

  describe("When it receives a current state and a showError action with a message payload 'Error adding synth", () => {
    test("Then it shoul change the ui state propert isError to true", () => {
      const expectedUiState: UiState = {
        isLoading: false,
        isError: true,
        message: "Error adding synth",
      };

      const errorMessage = "Error adding synth";

      const showErrorAction = showErrorActionCreator({
        message: errorMessage,
        isError: true,
      });

      const newUiState = uiReducer(initialUiState, showErrorAction);

      expect(newUiState).toStrictEqual(expectedUiState);
    });
  });
});
