import {
  addSynthStoreMock,
  emptySynthStoreMock,
  initialStateStoreMock,
} from "../../../mocks/synthsDbmocks";
import { addSynthActionCreator, synthReducer } from "../synthSlice";

describe("Given a addSynth reducer", () => {
  describe("When it receives a currentState with a synt list and a payload with a new synth", () => {
    test("Then it should show a new state with the new synth included on the synth list", () => {
      const initialSynthState = {
        synths: initialStateStoreMock,
        selectedSynth: emptySynthStoreMock,
      };

      const newSynth = addSynthStoreMock;

      const expectedState = {
        synths: [...initialStateStoreMock, newSynth],
        selectedSynth: emptySynthStoreMock,
      };

      const addSynthAction = addSynthActionCreator(newSynth);

      const newSynthState = synthReducer(initialSynthState, addSynthAction);

      expect(expectedState).toStrictEqual(newSynthState);
    });
  });
});
