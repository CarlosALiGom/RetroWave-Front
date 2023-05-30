import Header from "./Header";
import { screen } from "@testing-library/react";
import renderWithProviders from "../../utils/testUtils";

describe("Given a Header component", () => {
  describe("When its rendered", () => {
    test("Then it should show the web logo with and alt text 'RetroWave logo'", () => {
      const expectedAlternativeText = "RetroWave logo";

      renderWithProviders(<Header />);

      const logo = screen.getByAltText(expectedAlternativeText);

      expect(logo).toBeInTheDocument();
    });
  });
});
