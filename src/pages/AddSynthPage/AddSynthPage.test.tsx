import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import AddSynthPage from "./AddSynthPage";

describe("Given a AddSynthPage page", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading with the text 'Add Synth'", () => {
      const expectedHeading = "Add Synth";

      renderWithProviders(<AddSynthPage />);

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
