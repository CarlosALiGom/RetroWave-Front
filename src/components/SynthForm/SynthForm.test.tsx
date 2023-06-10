import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import SynthForm from "./SynthForm";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { addSynthMock } from "../../mocks/synthsDbmocks";

const labels = [
  "Type:",
  "Model:",
  "Brand:",
  "Release year:",
  "Image:",
  "Description:",
];

const handleOnSubmit = vi.fn();

describe("Given a SynthForm component", () => {
  describe("When its rendered", () => {
    labels.forEach((label) => {
      test(`Then it shoul show a text field with the text '${label}'`, () => {
        renderWithProviders(<SynthForm submitForm={handleOnSubmit} />);

        const labelText = screen.getByLabelText(label);

        expect(labelText).toBeInTheDocument();
      });
    });
  });

  test("Then it should show a heading with the text 'Add Synth'", () => {
    const expectedText = "Add Synth";

    renderWithProviders(<SynthForm submitForm={handleOnSubmit} />);

    const heading = screen.getByRole("heading", {
      level: 1,
      name: expectedText,
    });

    expect(heading).toBeInTheDocument();
  });

  test("Tne it should show a button with the text Add", () => {
    const expectedText = "Add";

    renderWithProviders(<SynthForm submitForm={handleOnSubmit} />);

    const button = screen.getByRole("button", { name: expectedText });

    expect(button).toBeInTheDocument();
  });

  labels.slice(1).forEach((label) => {
    describe(`When the user writes 'test' in the input ${label}`, () => {
      test("Then it should show the text 'test' in the input", async () => {
        const testText = "test";

        renderWithProviders(<SynthForm submitForm={handleOnSubmit} />);

        const labelField = screen.getByLabelText(label);

        await userEvent.type(labelField, testText);

        expect(labelField).toHaveValue(testText);
      });
    });
  });

  describe("When its rendered and the user select 'Analog' on type select", () => {
    test("Then it should show the text 'Analog' in the type select", async () => {
      const labelType = labels[0];
      const selectValue = "Analog";

      renderWithProviders(<SynthForm submitForm={handleOnSubmit} />);

      const typeInput = screen.getByLabelText(labelType);

      await userEvent.selectOptions(typeInput, selectValue);

      expect(typeInput).toHaveValue(selectValue);
    });
  });

  describe("When its rendered and any of the inputs are empty", () => {
    test("Then the button should be disabled", () => {
      const buttontext = "Add";

      renderWithProviders(<SynthForm submitForm={handleOnSubmit} />);

      const button = screen.getByRole("button", { name: buttontext });

      expect(button).toBeDisabled();
    });
  });

  describe("When its rendered and all the inputs are completed", () => {
    test("Then the button should be enabled", async () => {
      const buttonText = "Add";
      const testText = "test";
      const selectValue = "Analog";
      const labelType = labels[0];

      renderWithProviders(<SynthForm submitForm={handleOnSubmit} />);

      const labelField1 = screen.getByLabelText(labels[1]);
      const labelField2 = screen.getByLabelText(labels[2]);
      const labelField3 = screen.getByLabelText(labels[3]);
      const labelField4 = screen.getByLabelText(labels[4]);
      const labelField5 = screen.getByLabelText(labels[5]);
      await userEvent.type(labelField1, testText);
      await userEvent.type(labelField2, testText);
      await userEvent.type(labelField3, testText);
      await userEvent.type(labelField4, testText);
      await userEvent.type(labelField5, testText);
      const typeInput = screen.getByLabelText(labelType);

      await userEvent.selectOptions(typeInput, selectValue);
      const button = screen.getByRole("button", { name: buttonText });
      expect(button).toBeEnabled();
    });
  });

  describe("When the user writes all the synth data and clicks the button add", () => {
    test("Then the onSubmit function should be called with the synth data", async () => {
      const synthMock = addSynthMock;
      const selectValue = "Analog";
      const buttonText = "Add";

      renderWithProviders(<SynthForm submitForm={handleOnSubmit} />);

      await userEvent.type(screen.getByLabelText(labels[1]), synthMock.name);
      await userEvent.type(screen.getByLabelText(labels[2]), synthMock.brand);
      await userEvent.type(
        screen.getByLabelText(labels[3]),
        synthMock.yearOfCreation
      );
      await userEvent.type(
        screen.getByLabelText(labels[4]),
        synthMock.imageUrl
      );
      await userEvent.type(
        screen.getByLabelText(labels[5]),
        synthMock.description
      );

      const typeInput = screen.getByLabelText(labels[0]);
      await userEvent.selectOptions(typeInput, selectValue);

      const button = screen.getByRole("button", { name: buttonText });
      await userEvent.click(button);

      expect(handleOnSubmit).toHaveBeenCalledWith(synthMock);
    });
  });
});
