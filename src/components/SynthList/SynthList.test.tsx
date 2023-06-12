import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import SynthList from "./SynthList";

describe("Given a SynthList component", () => {
  describe("When its rendered with a synth", () => {
    test("Then it should show a list with an aria label 'synth list'", () => {
      const expectedAriaText = "synth list";

      renderWithProviders(wrapWithRouter(<SynthList />));

      const listLabelText = screen.getByLabelText(expectedAriaText);

      expect(listLabelText).toBeInTheDocument();
    });
  });
});
