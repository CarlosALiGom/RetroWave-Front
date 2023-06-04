import { createSlice } from "@reduxjs/toolkit";

export interface UiState {
  isLoading: boolean;
}

export const initialUiState: UiState = {
  isLoading: false,
};

const uiSlice = createSlice({
  name: "loading",
  initialState: initialUiState,
  reducers: {
    showLoading: (currentState: UiState): UiState => ({
      ...currentState,
      isLoading: true,
    }),
  },
});

export const uiReducer = uiSlice.reducer;
export const { showLoading: showLoadingActionCreator } = uiSlice.actions;
