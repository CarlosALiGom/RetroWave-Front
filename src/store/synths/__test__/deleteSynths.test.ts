import { expect } from "vitest";
import {
  SynthState,
  deleteSynthActionCreator,
  synthReducer,
} from "../synthSlice";
import {
  emptySynthStoreMock,
  synthDbMocks,
} from "../../../mocks/synthsDbmocks";

describe("Given a deleteSynths reducer", () => {
  describe("When it receives a current synths state with 5 synths and a synth id payload that matches one of the synths", () => {
    test("Then it should show the new state without the matched id payload one", () => {
      const synthsList = synthDbMocks;

      const currentSynthState: SynthState = {
        synths: synthsList,
        selectedSynth: emptySynthStoreMock,
      };

      const expectedSynthState = {
        synths: synthsList.slice(1),
        selectedSynth: emptySynthStoreMock,
      };

      const deleteSynthAction = deleteSynthActionCreator(synthsList[0].id);

      const newSynthState = synthReducer(currentSynthState, deleteSynthAction);

      expect(expectedSynthState).toStrictEqual(newSynthState);
    });
  });
});
