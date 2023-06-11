import { renderHook, screen } from "@testing-library/react";
import useSynths from "../useSynths";
import { synthDbMocks } from "../../../mocks/synthsDbmocks";
import { vi } from "vitest";
import {
  renderWithProviders,
  wrapWithProviders,
} from "../../../utils/testUtils";
import { server } from "../../../mocks/server";
import { errorHandlers, handlers } from "../../../mocks/handlers";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import App from "../../../components/App/App";

beforeAll(() => {
  vi.clearAllMocks();
});

describe("Given a useApi custom hook", () => {
  describe("When its getSynths function its called", () => {
    test("Then it should return a collection of five synths", async () => {
      server.resetHandlers(...handlers);
      const expectedSynths = synthDbMocks;
      const {
        result: {
          current: { getSynths },
        },
      } = renderHook(() => useSynths(), { wrapper: wrapWithProviders });

      const synths = await getSynths(0, 5);

      expect(synths?.synths).toStrictEqual(expectedSynths);
    });
  });

  describe("When it receives an invalid token", () => {
    test("Then it should show a modal with a svg with and alt text 'synth modal ilustration'", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedAltText = "synth modal ilustration";

      const {
        result: {
          current: { getSynths },
        },
      } = renderHook(() => useSynths(), { wrapper: wrapWithProviders });

      const routes: RouteObject[] = [{ path: "/", element: <App /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await getSynths(1, 10);

      const svgAltText = await screen.findByAltText(expectedAltText);

      expect(svgAltText).toBeInTheDocument();
    });
  });
});
