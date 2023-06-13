import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { LazySynthsPage } from "../../router/LazyPages";
import SynthsPage from "./SynthsPage";
import { UserDataState } from "../../mocks/userMocks";
import { getSynthsDataMock } from "../../mocks/factories/synthFactory/synthFactory";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../router/paths/paths";
import userEvent from "@testing-library/user-event";
import {
  addSynthStoreMock,
  eightSynthsDbMock,
  synthDbMock,
} from "../../mocks/synthsDbmocks";
import { server } from "../../mocks/server";
import { handlers } from "../../mocks/handlers";

describe("Given a SynthPage component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading with the text 'Synths'", async () => {
      const expectedHeading = "Synths";
      const synths = getSynthsDataMock(3);

      renderWithProviders(wrapWithRouter(<LazySynthsPage />), {
        synths: { synths: synths, selectedSynth: addSynthStoreMock },
        users: UserDataState,
      });

      const heading = await waitFor(() =>
        screen.getByRole("heading", {
          level: 1,
          name: expectedHeading,
        })
      );

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When its rendered with the user alredy logged", () => {
    test("Then it should show a synth with and image alt text", async () => {
      const synths = getSynthsDataMock(3);
      const expectedText = synths[0].name;

      renderWithProviders(wrapWithRouter(<SynthsPage />), {
        synths: { synths: synths, selectedSynth: addSynthStoreMock },
        users: UserDataState,
      });

      const heading = await screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When there is a card with a heading 'TR-808' adn the user clicks the delete button", () => {
    test("Then page should not render the card with the 'TR-808' heading", async () => {
      server.resetHandlers(...handlers);
      const expectedHeading = "TR-808";
      const expectedAriaLabel = "delete button";

      const routes: RouteObject[] = [
        { path: paths.app, element: <SynthsPage /> },
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

      const heading = await screen.getByRole("heading", {
        name: expectedHeading,
      });
      const button = await screen.getByLabelText(expectedAriaLabel);

      await userEvent.click(button);

      expect(heading).not.toBeInTheDocument();
    });
  });

  describe("When its rendered with a list synths", () => {
    test("Then if the user press next and then back to the first list, then the 'back' button should be disabled", async () => {
      server.resetHandlers(...handlers);

      const nextButtonText = "Next";
      const backButtonText = "Back";

      renderWithProviders(wrapWithRouter(<SynthsPage />), {
        users: {
          id: "64707ddf2d09cd1540f0faaf",
          name: "admin",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJzdWIiOiI2NDcwN2RkZjJkMDljZDE1NDBmMGZhYWYiLCJpYXQiOjE2ODU1NDMwMjgsImV4cCI6MTY4NTgwMjIyOH0.8ow7vXeJ31asvveYlL6twB3khIvVPfNmteM5rZR_LjM",
          isLogged: true,
        },
        synths: { synths: eightSynthsDbMock, selectedSynth: addSynthStoreMock },
      });

      const nextButton = screen.getByRole("button", { name: nextButtonText });
      const backButton = screen.getByRole("button", { name: backButtonText });
      await userEvent.click(nextButton);
      await userEvent.click(backButton);

      expect(nextButton).toBeEnabled();
      expect(backButton).toBeDisabled();
    });
  });

  describe("When its rendered and the user selects 'Analog' type", () => {
    test("Then the value of type should be 'Analog'", async () => {
      server.resetHandlers(...handlers);

      const selectValue = "Analog";
      const labelType = "filter by type";

      renderWithProviders(wrapWithRouter(<SynthsPage />), {
        users: {
          id: "64707ddf2d09cd1540f0faaf",
          name: "admin",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJzdWIiOiI2NDcwN2RkZjJkMDljZDE1NDBmMGZhYWYiLCJpYXQiOjE2ODU1NDMwMjgsImV4cCI6MTY4NTgwMjIyOH0.8ow7vXeJ31asvveYlL6twB3khIvVPfNmteM5rZR_LjM",
          isLogged: true,
        },
      });

      const typeInput = screen.getByLabelText(labelType);

      await userEvent.selectOptions(typeInput, selectValue);
      expect(typeInput).toHaveValue(selectValue);
    });
  });
});
