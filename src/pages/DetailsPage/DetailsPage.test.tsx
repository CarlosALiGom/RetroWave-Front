import { screen } from "@testing-library/react";
import { handlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import {
  addSynthStoreMock,
  eightSynthsDbMock,
  synthDbMock,
} from "../../mocks/synthsDbmocks";
import { renderWithProviders } from "../../utils/testUtils";
import DetailsPage from "./DetailsPage";
import userEvent from "@testing-library/user-event";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../router/paths/paths";
import SynthsPage from "../SynthsPage/SynthsPage";
import { store } from "../../store";
import UpdateSynthPage from "../UpdateSynthPage/UpdateSynthPage";
import { vi } from "vitest";

window.scroll = vi.fn().mockImplementation(() => ({}));
describe("Given a DetailsPage", () => {
  describe("When its rendered with a selectedSynth in the store and the user clicks on delete", () => {
    test("Then it should show a modal with a text 'Synth deleted succesfully'", async () => {
      server.resetHandlers(...handlers);

      const buttonText = "Delete";

      const routes: RouteObject[] = [
        { path: paths.app, element: <DetailsPage /> },
        { path: paths.home, element: <SynthsPage /> },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        users: {
          id: "64707ddf2d09cd1540f0faaf",
          name: "admin",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJzdWIiOiI2NDcwN2RkZjJkMDljZDE1NDBmMGZhYWYiLCJpYXQiOjE2ODU1NDMwMjgsImV4cCI6MTY4NTgwMjIyOH0.8ow7vXeJ31asvveYlL6twB3khIvVPfNmteM5rZR_LjM",
          isLogged: true,
        },
        synths: {
          synths: eightSynthsDbMock,
          selectedSynth: addSynthStoreMock,
        },
      });

      const button = screen.getByRole("button", { name: buttonText });
      await userEvent.click(button);

      expect(router.state.location.pathname).toBe(paths.home);
    });
  });

  describe("When SynthPage its rendered with a synth and the user clicks on the link", () => {
    test("Then it should redirect and renders the details page", async () => {
      server.resetHandlers(...handlers);

      const routes: RouteObject[] = [
        {
          path: paths.app,
          element: <SynthsPage />,
        },
        {
          path: `${paths.synths}/${synthDbMock[0].id}`,
          element: <DetailsPage />,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        users: {
          id: "64707ddf2d09cd1540f0faaf",
          name: "admin",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJzdWIiOiI2NDcwN2RkZjJkMDljZDE1NDBmMGZhYWYiLCJpYXQiOjE2ODU1NDMwMjgsImV4cCI6MTY4NTgwMjIyOH0.8ow7vXeJ31asvveYlL6twB3khIvVPfNmteM5rZR_LjM",
          isLogged: true,
        },
        synths: {
          synths: synthDbMock,
          selectedSynth: {
            brand: "",
            description: "",
            id: "",
            imageUrl: "",
            name: "",
            type: "",
            yearOfCreation: "",
          },
        },
      });

      const synthLink = screen.getByLabelText("navigate to details");
      await userEvent.click(synthLink);

      expect(router.state.location.pathname).toBe(
        `${paths.synths}/${synthDbMock[0].id}`
      );
    });
  });

  describe("When its rendered with a synth and the user clicks on the 'Edit' button", () => {
    test("Then it should show the update form heading 'Update synth'", async () => {
      const buttonText = "Edit";
      const formHeading = "Update Synth";

      const routes: RouteObject[] = [
        {
          path: `/:synthId`,
          element: <DetailsPage />,
        },
        {
          path: paths.updateSynth,
          element: <UpdateSynthPage />,
        },
      ];

      const synthId = store.getState().synths.selectedSynth.id;

      const router = createMemoryRouter(routes, {
        initialEntries: ["/", `/synths/${synthId}`],
      });

      renderWithProviders(<RouterProvider router={router} />);

      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.click(button);

      const updateFormHeading = screen.getByRole("heading", {
        name: formHeading,
      });

      expect(updateFormHeading).toBeInTheDocument();
    });
  });
});
