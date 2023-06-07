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
import { initialUserState } from "../../store/user/userSlice";
import LoginPage from "../LoginPage/LoginPage";

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

  describe("When its rendered with the user not logged", () => {
    test("Then it should redirect to login page and renders a LoginForm with a 'Login' heading", async () => {
      const expectedHeading = "Login";

      const routes: RouteObject[] = [
        { path: paths.app, element: <SynthsPage /> },
        { path: paths.login, element: <LoginPage /> },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        users: initialUserState,
      });

      screen.debug();
      const heading = await screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
