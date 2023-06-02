import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import NavigationBar from "./NavigationBar";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";

describe("Given a NavigationBar component", () => {
  describe("When its rendered", () => {
    test("Then it should show a link with text 'Home'", () => {
      const expectedLinkText = "Home";

      renderWithProviders(wrapWithRouter(<NavigationBar />));

      const linkText = screen.getByRole("link", { name: expectedLinkText });

      expect(linkText).toBeInTheDocument();
    });
  });

  describe("When the user clicks the exit button", () => {
    test("Then it should redirect the page to the login", async () => {
      const routes: RouteObject[] = [{ path: "/", element: <NavigationBar /> }];

      const route = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={route} />);

      const button = screen.getByRole("button");
      await userEvent.click(button);

      expect(route.state.location.pathname).toBe("/login");
    });
  });
});
