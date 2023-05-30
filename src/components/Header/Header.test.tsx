import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./Header";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme";

describe("Given a Header component", () => {
  describe("When its rendered", () => {
    test("Then it should show the web logo with and alt text 'RetroWave logo'", () => {
      const expectedAlternativeText = "RetroWave logo";
      const routes = [
        {
          path: "/",
          element: <Header />,
        },
      ];

      const router = createBrowserRouter(routes);

      render(
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      );

      const logo = screen.getByAltText(expectedAlternativeText);

      expect(logo).toBeInTheDocument();
    });
  });
});
