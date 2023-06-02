import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SynthStructure } from "./types";

export interface SynthState {
  synths: SynthStructure[];
}

export const initialSynthState: SynthState = {
  synths: [],
};

const synthSlice = createSlice({
  name: "synths",
  initialState: initialSynthState,
  reducers: {
    loadSynths: (
      currentSynths,
      action: PayloadAction<SynthStructure[]>
    ): SynthState => ({
      ...currentSynths,
      synths: [...action.payload],
    }),
  },
});

export const { loadSynths: loadSynthsActionCreator } = synthSlice.actions;
export const synthReducer = synthSlice.reducer;
