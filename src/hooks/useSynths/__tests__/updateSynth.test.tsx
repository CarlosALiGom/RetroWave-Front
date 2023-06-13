import { vi } from "vitest";
import { server } from "../../../mocks/server";
import { errorHandlers, handlers } from "../../../mocks/handlers";
import { renderHook, screen } from "@testing-library/react";
import useSynths from "../useSynths";
import {
  renderWithProviders,
  wrapWithProviders,
} from "../../../utils/testUtils";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import Layout from "../../../components/Layout/Layout";
import { errorMessages } from "../../../utils/errorMessages";
import { addSynthMock } from "../../../mocks/synthsDbmocks";
import { feedbackMessage } from "../../../utils/feedbackMessages";

beforeAll(() => {
  vi.clearAllMocks();
});

describe("Given a useApi custom hook", () => {
  describe("When its updateSynth function its called with a validd synth and id", () => {
    test("Then it should show a modal with the text 'Synth updated succesfully'", async () => {
      server.resetHandlers(...handlers);

      const expectedModalText = feedbackMessage.synthUpdated;

      const idToDelete = "6474a6a62d09cd1540f0fab7";

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const {
        result: {
          current: { updateSynth },
        },
      } = renderHook(() => useSynths(), { wrapper: wrapWithProviders });

      await updateSynth(idToDelete, { ...addSynthMock, id: idToDelete });

      const modal = screen.getByText(expectedModalText);

      expect(modal).toBeInTheDocument();
    });
  });
  describe("When its updateSynth function its called with a non valids synth and id", () => {
    test("Then it should show a modal with the text 'Error updating synth'", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedModalText = errorMessages.synthNotUpdated;
      const idToDelete = "6474a6a62d09cd1540f0fab7";

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const {
        result: {
          current: { updateSynth },
        },
      } = renderHook(() => useSynths(), { wrapper: wrapWithProviders });

      await updateSynth(idToDelete, { ...addSynthMock, id: idToDelete });

      const modal = screen.getByText(expectedModalText);

      expect(modal).toBeInTheDocument();
    });
  });
});
