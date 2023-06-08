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
import { synthDbMock } from "../../mocks/synthsDbmocks";

describe("Given a SynthPage component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading with the text 'Synths'", async () => {
      const expectedHeading = "Synths";
      const synths = getSynthsDataMock(3);

      renderWithProviders(wrapWithRouter(<LazySynthsPage />), {
        synths: { synths: synths },
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
        synths: { synths: synths },
        users: UserDataState,
      });

      const heading = await screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When there is a card with a heading 'TR-808' adn the user clicks the delete button", () => {
    test("Then page should not render the card with the 'TR-808' heading", async () => {
      const expectedHeading = "TR-808";
      const expectedAriaLabel = "delete button";

      const routes: RouteObject[] = [
        { path: paths.app, element: <SynthsPage /> },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        users: UserDataState,
        synths: { synths: synthDbMock },
      });

      const heading = await screen.getByRole("heading", {
        name: expectedHeading,
      });
      const button = await screen.getByLabelText(expectedAriaLabel);

      await userEvent.click(button);

      expect(heading).not.toBeInTheDocument();
    });
  });
});
