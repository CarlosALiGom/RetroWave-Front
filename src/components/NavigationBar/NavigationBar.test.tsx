import { screen } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import NavigationBar from "./NavigationBar";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import LoginPage from "../../pages/LoginPage/LoginPage";
import { UserDataState } from "../../mocks/userMocks";

describe("Given a NavigationBar component", () => {
  describe("When its rendered", () => {
    test("Then it should show a link with text 'Home'", () => {
      const expectedLinkText = "Home";

      renderWithProviders(wrapWithRouter(<NavigationBar />), {
        users: UserDataState,
      });

      const linkText = screen.getByRole("link", { name: expectedLinkText });

      expect(linkText).toBeInTheDocument();
    });
  });

  describe("When the user clicks the exit button", () => {
    test("Then it should show a LoginForm", async () => {
      const routes: RouteObject[] = [
        { path: "/", element: <NavigationBar /> },
        { path: "/login", element: <LoginPage /> },
      ];
      const expectedText = "Login";

      const route = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={route} />);

      const button = screen.getByRole("button");
      await userEvent.click(button);
      screen.debug();

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedText,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
