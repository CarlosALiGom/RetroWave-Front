import { RouterProvider } from "react-router-dom";
import { renderWithProviders } from "../utils/testUtils";
import appRouter from "./appRouter";
import { screen } from "@testing-library/react";

describe("Given an appRouter", () => {
  describe("When its rendered", () => {
    test("Then it should show a logo with an alternative text 'RetroWave logo'", () => {
      const expectedAltText = "RetroWave logo";

      renderWithProviders(<RouterProvider router={appRouter} />);

      const logo = screen.getByAltText(expectedAltText);

      expect(logo).toBeInTheDocument();
    });
  });
});
