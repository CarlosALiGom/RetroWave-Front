import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/testUtils";
import NavigationBar from "./NavigationBar";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";
import GlobalStyle from "../../styles/GlobalStyle";

describe("Given a NavigationBar component", () => {
  describe("When its rendered", () => {
    test("Then it should show a link with text 'Home'", () => {
      const expectedLinkText = "Home";

      renderWithProviders(<NavigationBar />);

      const linkText = screen.getByRole("link", { name: expectedLinkText });

      expect(linkText).toBeInTheDocument();
    });
  });

  describe("When the user clicks the exit button", () => {
    test("Then it should redirect the page to the login", async () => {
      const routes: RouteObject[] = [{ path: "/", element: <NavigationBar /> }];

      const route = createMemoryRouter(routes);

      render(
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Provider store={store}>
            <RouterProvider router={route} />
          </Provider>
        </ThemeProvider>
      );

      const button = screen.getByRole("button");
      await userEvent.click(button);

      expect(route.state.location.pathname).toBe("/login");
    });
  });
});
