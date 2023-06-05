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

  describe("When isLoading uiStore state is true", () => {
    test("Then it should render a Loader with and aria label text 'Loading'", () => {
      const expectedText = "Loading";

      renderWithProviders(wrapWithRouter(<Layout />), {
        ui: { isLoading: true, isError: false, message: "" },
      });

      const loader = screen.getByLabelText(expectedText);

      expect(loader).toBeInTheDocument();
    });
  });
});
