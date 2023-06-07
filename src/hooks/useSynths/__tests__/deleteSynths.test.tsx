import { renderHook, screen } from "@testing-library/react";
import { errorHandlers } from "../../../mocks/handlers";
import { server } from "../../../mocks/server";
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

describe("Given a useApi custom hook", () => {
  describe("When its deleteSynth function its called and it rejects", () => {
    test("Then it should show an error modal with an image with an alt text 'synth modal ilustration'", async () => {
      server.resetHandlers(...errorHandlers);

      const expectedAltText = "synth modal ilustration";
      const idToDelete = "6474a6a62d09cd1540f0fab7";

      const {
        result: {
          current: { deleteSynths },
        },
      } = renderHook(() => useSynths(), { wrapper: wrapWithProviders });

      const routes: RouteObject[] = [{ path: "/", element: <Layout /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await deleteSynths(idToDelete);

      const svgAltText = await screen.findByAltText(expectedAltText);

      expect(svgAltText).toBeInTheDocument();
    });
  });
});
