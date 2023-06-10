import { renderHook, screen } from "@testing-library/react";
import { vi } from "vitest";
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
import { addSynthMock } from "../../../mocks/synthsDbmocks";
import { server } from "../../../mocks/server";
import { errorHandlers, handlers } from "../../../mocks/handlers";

beforeAll(() => {
  vi.clearAllMocks();
});

describe("Given a useSynths custom hook", () => {
  describe("When its addSynth function its called", () => {
    test("Then it should show a modal with a message `Synth added succesfully`", async () => {
      server.resetHandlers(...handlers);

      const expectedText = "Synth added succesfully";

      const {
        result: {
          current: { addSynth },
        },
      } = renderHook(() => useSynths(), { wrapper: wrapWithProviders });

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await addSynth(addSynthMock);

      const feedbackMessage = await screen.findByText(expectedText);

      expect(feedbackMessage).toBeInTheDocument();
    });
  });

  describe("When its addSynth function its called and rejects", () => {
    test("Then it should show a modal with a message `Error adding synth`", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedText = "Error adding synth";

      const {
        result: {
          current: { addSynth },
        },
      } = renderHook(() => useSynths(), { wrapper: wrapWithProviders });

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await addSynth(addSynthMock);

      const feedbackMessage = await screen.findByText(expectedText);

      expect(feedbackMessage).toBeInTheDocument();
    });
  });
});
