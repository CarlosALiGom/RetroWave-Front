import {
  addSynthStoreMock,
  emptySynthStoreMock,
  initialStateStoreMock,
} from "../../../mocks/synthsDbmocks";
import { loadSelectedSynthActionCreator, synthReducer } from "../synthSlice";

describe("Given a loadSelectedSynths reducer", () => {
  describe("When it receives a current synths state and a load selected synth action with a synth payload", () => {
    test("Then it should show the new state with the list of synths and a property 'selected synth' with the payload synth", () => {
      const synthsList = initialStateStoreMock;

      const expectedStoreState = {
        synths: synthsList,
        selectedSynth: addSynthStoreMock,
      };

      const loadSelectedSynthsAction =
        loadSelectedSynthActionCreator(addSynthStoreMock);

      const newStoreState = synthReducer(
        { synths: synthsList, selectedSynth: emptySynthStoreMock },
        loadSelectedSynthsAction
      );

      expect(newStoreState).toStrictEqual(expectedStoreState);
    });
  });
});
