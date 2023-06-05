import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UiState {
  isLoading: boolean;
  isError: boolean;
  message: string;
}

export interface ModalPayload {
  message: string;
  isError: boolean;
}

export const initialUiState: UiState = {
  isLoading: false,
  isError: false,
  message: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentState: UiState): UiState => ({
      ...currentState,
      isLoading: true,
    }),
    hideLoading: (currentState: UiState): UiState => ({
      ...currentState,
      isLoading: false,
    }),
    showError: (
      currentState: UiState,
      action: PayloadAction<ModalPayload>
    ): UiState => ({
      ...currentState,
      ...action.payload,
    }),
    hideError: (currentState: UiState): UiState => ({
      ...currentState,
      message: "",
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
  showError: showErrorActionCreator,
  hideError: hideErrorActionCreator,
} = uiSlice.actions;
