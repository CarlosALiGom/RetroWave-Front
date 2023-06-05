import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import LoginPage from "./LoginPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import App from "../../components/App/App";
import paths from "../../router/paths/paths";

describe("Given a LoginPage component", () => {
  const usernameLabelText = "Username:";
  const passwordLabelText = "Password:";
  const userDataText = "Frank";
  const routes: RouteObject[] = [
    { path: paths.app, element: <LoginPage /> },
    { path: paths.home, element: <App /> },
  ];

  describe("When its rendered", () => {
    test("Then it should show a heading with the text 'Login'", () => {
      const expectedHeading = "Login";

      renderWithProviders(wrapWithRouter(<LoginPage />));

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When the user enter credentials and clicks the login button", () => {
    test("Then it should redirects to home page", async () => {
      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await userEvent.type(
        screen.getByLabelText(usernameLabelText),
        userDataText
      );
      await userEvent.type(
        screen.getByLabelText(passwordLabelText),
        userDataText
      );

      const button = screen.getByRole("button", { name: "Login" });
      await userEvent.click(button);

      expect(router.state.location.pathname).toBe(paths.home);
    });
  });

  describe("When the user enter invalid credentials and clicks the login button", () => {
    test("Then it should stay on login page", async () => {
      server.resetHandlers(...errorHandlers);

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      await userEvent.type(
        screen.getByLabelText(usernameLabelText),
        userDataText
      );
      await userEvent.type(
        screen.getByLabelText(passwordLabelText),
        userDataText
      );

      const button = screen.getByRole("button", { name: "Login" });
      await userEvent.click(button);

      expect(router.state.location.pathname).toBe(paths.app);
    });
  });
});
