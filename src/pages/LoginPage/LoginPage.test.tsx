import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/testUtils";
import LoginPage from "./LoginPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import GlobalStyle from "../../styles/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "../../store";
import { render } from "@testing-library/react";

describe("Given a LoginPage component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading with the text 'Login'", () => {
      const expectedHeading = "Login";

      renderWithProviders(<LoginPage />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When the user enter credentials and clicks the login button", () => {
    test("Then it should redirects to home page", async () => {
      const usernameLabelText = "Username:";
      const passwordLabelText = "Password:";
      const userDataText = "Frank";

      const routes: RouteObject[] = [
        { path: "/", element: <LoginPage /> },
        { path: "/home" },
      ];

      const router = createMemoryRouter(routes);

      render(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Provider store={store}>
            <RouterProvider router={router} />
          </Provider>
        </ThemeProvider>
      );

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

      expect(router.state.location.pathname).toBe("/home");
    });
  });
});
