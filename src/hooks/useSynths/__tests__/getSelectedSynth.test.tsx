import { renderHook, screen } from "@testing-library/react";
import { errorHandlers, handlers } from "../../../mocks/handlers";
import { server } from "../../../mocks/server";
import useSynths from "../useSynths";
import {
  renderWithProviders,
  wrapWithProviders,
} from "../../../utils/testUtils";
import { addSynthStoreMock } from "../../../mocks/synthsDbmocks";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import Layout from "../../../components/Layout/Layout";

describe("Given a useApi custom hook", () => {
  describe("When its getSelectedSynth function its called with a valid id", () => {
    test("Then it should return a synth that matches the id'", async () => {
      server.resetHandlers(...handlers);

      const expectedSynth = addSynthStoreMock;

      const {
        result: {
          current: { getSelectedSynth },
        },
      } = renderHook(() => useSynths(), { wrapper: wrapWithProviders });

      const synth = await getSelectedSynth(addSynthStoreMock.id);

      expect(synth).toStrictEqual(expectedSynth);
    });
  });

  describe("When its getSelectedSynth function its called with an invalid id", () => {
    test("Then it should should show an error modal with a text 'Error charging synth details'", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedModalText = "Error charging synth details";

      const {
        result: {
          current: { getSelectedSynth },
        },
      } = renderHook(() => useSynths(), { wrapper: wrapWithProviders });

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await getSelectedSynth(addSynthStoreMock.id);

      const modal = screen.getByText(expectedModalText);

      expect(modal).toBeInTheDocument();
    });
  });
});
