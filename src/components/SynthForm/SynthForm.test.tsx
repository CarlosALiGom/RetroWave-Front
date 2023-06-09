import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import SynthForm from "./SynthForm";

const labels = [
  "Model:",
  "Brand:",
  "Release year:",
  "Image:",
  "Type:",
  "Description:",
];

describe("Given a SynthForm component", () => {
  describe("When its rendered", () => {
    labels.forEach((label) => {
      test(`Then it shoul show a text field with the text '${label}'`, () => {
        renderWithProviders(<SynthForm />);

        const labelText = screen.getByLabelText(label);

        expect(labelText).toBeInTheDocument();
      });
    });
  });

  test("Tne it should show a button with the text Add", () => {
    const expectedText = "Add";

    renderWithProviders(<SynthForm />);

    const button = screen.getByRole("button", { name: expectedText });

    expect(button).toBeInTheDocument();
  });
});
