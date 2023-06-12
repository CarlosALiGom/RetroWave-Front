import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SynthDataStructure } from "./types";

export interface SynthState {
  synths: SynthDataStructure[];
  selectedSynth: SynthDataStructure;
}

export const initialSynthState: SynthState = {
  synths: [],
  selectedSynth: {
    brand: "",
    description: "",
    id: "",
    imageUrl: "",
    name: "",
    type: "",
    yearOfCreation: "",
  },
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
    deleteSynth: (
      currentSynths,
      action: PayloadAction<string>
    ): SynthState => ({
      ...currentSynths,
      synths: currentSynths.synths.filter(
        (synth) => synth.id !== action.payload
      ),
    }),
    addSynth: (
      currentSynths,
      action: PayloadAction<SynthDataStructure>
    ): SynthState => ({
      ...currentSynths,
      synths: [...currentSynths.synths, action.payload],
    }),
    loadSelectedSynth: (
      currentSynths,
      action: PayloadAction<SynthDataStructure>
    ) => ({
      ...currentSynths,
      selectedSynth: action.payload,
    }),
  },
});

export const {
  loadSynths: loadSynthsActionCreator,
  deleteSynth: deleteSynthActionCreator,
  addSynth: addSynthActionCreator,
  loadSelectedSynth: loadSelectedSynthActionCreator,
} = synthSlice.actions;
export const synthReducer = synthSlice.reducer;
