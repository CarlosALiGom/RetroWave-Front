import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SynthsPage from "./SynthsPage";

describe("Given a SynthPage component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading with the text 'Synths'", () => {
      const expectedHeading = "Synths";

      renderWithProviders(wrapWithRouter(<SynthsPage />));

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
