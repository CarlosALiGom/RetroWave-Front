import { renderHook } from "@testing-library/react";
import useSynths from "./useSynths";
import { synthDbMocks } from "../../mocks/synthsDbmocks";
import { wrapWithProviders } from "../../utils/testUtils";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";

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
    test("Then it throw an error with the message 'Sorry, synths can't be loaded'", () => {
      server.resetHandlers(...errorHandlers);

      const expectedErrorMessage = "Sorry, synths can't be loaded";

      const {
        result: {
          current: { getSynths },
        },
      } = renderHook(() => useSynths(), { wrapper: wrapWithProviders });

      const synths = getSynths();

      expect(synths).rejects.toThrowError(expectedErrorMessage);
    });
  });
});
