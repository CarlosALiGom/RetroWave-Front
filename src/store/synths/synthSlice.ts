import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SynthDataStructure } from "./types";

export interface SynthState {
  synths: SynthDataStructure[];
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
      action: PayloadAction<SynthDataStructure[]>
    ): SynthState => ({
      ...currentSynths,
      synths: [...action.payload],
    }),
  },
});

export const { loadSynths: loadSynthsActionCreator } = synthSlice.actions;
export const synthReducer = synthSlice.reducer;
