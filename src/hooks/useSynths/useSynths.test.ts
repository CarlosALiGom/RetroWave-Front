import { renderHook } from "@testing-library/react";
import useSynths from "./useSynths";
import { synthDbMocks } from "../../mocks/synthsDbmocks";
import { vi } from "vitest";
import { wrapWithProviders } from "../../utils/testUtils";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import { store } from "../../store";
import { hideLoadingActionCreator } from "../../store/ui/uiSlice";

const spyDispatch = vi.spyOn(store, "dispatch");

beforeAll(() => {
  vi.clearAllMocks();
});
describe("Given a useApi custom hook", () => {
  describe("When its getSynths function its called", () => {
    test("Then it should return a collection of five synths", async () => {
      const expectedSynths = synthDbMocks;
      const {
        result: {
          current: { getSynths },
        },
      } = renderHook(() => useSynths(), { wrapper: wrapWithProviders });

      const synths = await getSynths();

      expect(synths).toStrictEqual(expectedSynths);
    });
  });

  describe("When it receives an invalid token", () => {
    test("Then it should dispatch the hide loading action", () => {
      server.resetHandlers(...errorHandlers);

      const {
        result: {
          current: { getSynths },
        },
      } = renderHook(() => useSynths(), { wrapper: wrapWithProviders });

      getSynths();

      expect(spyDispatch).toHaveBeenCalledWith(hideLoadingActionCreator());
    });
  });
});
