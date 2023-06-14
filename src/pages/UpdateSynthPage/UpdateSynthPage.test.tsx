import { screen } from "@testing-library/react";
import { handlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import {
  addSynthStoreMock,
  eightSynthsDbMock,
  synthDbMock,
} from "../../mocks/synthsDbmocks";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import UpdateSynthPage from "./UpdateSynthPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../router/paths/paths";
import Layout from "../../components/Layout/Layout";
import userEvent from "@testing-library/user-event";

describe("Given a UpdateSynthPage", () => {
  describe("When its rendered and there is a selectedSynth model 'TR-808' in the store", () => {
    test("Then the input value of model should be 'TR-808'", () => {
      server.resetHandlers(...handlers);

      const label = "Model:";
      const expectedLabelText = "TR-808";

      renderWithProviders(wrapWithRouter(<UpdateSynthPage />), {
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

      const labelField = screen.getByLabelText(label);

      expect(labelField).toHaveValue(expectedLabelText);
    });
  });

  describe("When its rendered and there is a selectedSynth synth in the inputs vlaues and the user change one and press the button 'Update'", () => {
    test("Then it should show a modal with the text 'Synth updated succesfully", async () => {
      server.resetHandlers(...handlers);

      const modalText = "Synth updated succesfully";
      const expectedLabelText = "Model:";
      const buttonText = "Update";

      const routes: RouteObject[] = [
        { path: paths.app, element: <UpdateSynthPage /> },
        { path: paths.home, element: <Layout /> },
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
        synths: { synths: synthDbMock, selectedSynth: addSynthStoreMock },
      });

      const labelField = screen.getByLabelText(expectedLabelText);
      await userEvent.type(labelField, "testText");

      const button = screen.getByRole("button", { name: buttonText });
      await userEvent.click(button);

      const modal = screen.getByText(modalText);

      expect(modal).toBeInTheDocument();
    });
  });
});
