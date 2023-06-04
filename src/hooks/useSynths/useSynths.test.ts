import { renderHook } from "@testing-library/react";
import useSynths from "./useSynths";
import { synthDbMocks } from "../../mocks/synthsDbmocks";
import { wrapWithProviders } from "../../utils/testUtils";

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
});
