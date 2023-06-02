import { screen } from "@testing-library/dom";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Layout from "./Layout";

describe("Given a Layout component", () => {
  describe("When its rendered", () => {
    test("Then it should show a Logo with the alt text 'RetroWave logo'", () => {
      const expectedAlternativeText = "RetroWave logo";

      renderWithProviders(wrapWithRouter(<Layout />));

      const logo = screen.getByAltText(expectedAlternativeText);

      expect(logo).toBeInTheDocument();
    });
  });
});
