import { getSynthsDataMock } from "../../../mocks/factories/synthFactory/synthFactory";
import {
  initialSynthState,
  loadSynthsActionCreator,
  synthReducer,
} from "../synthSlice";

describe("Given a loadSynths reducer", () => {
  describe("When it receives a current synths state and a load synths action with a list of synths payload", () => {
    test("Then it should show the new state with the list of synths", () => {
      const synthsList = getSynthsDataMock(3);
      const loadSynthsAction = loadSynthsActionCreator(synthsList);

      const newSynthState = synthReducer(initialSynthState, loadSynthsAction);

      expect(newSynthState).toStrictEqual({ synths: synthsList });
    });
  });
});
