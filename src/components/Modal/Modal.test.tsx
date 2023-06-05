import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Modal from "./Modal";

describe("Given a Modal component", () => {
  describe("When its rendered", () => {
    test("Then it should show a svg wiht and alt text 'synth modal ilustration'", () => {
      const expectedAltText = "synth modal ilustration";

      renderWithProviders(
        <Modal isError={false} message="Exit adding synth" />
      );

      const svgAltText = screen.getByAltText(expectedAltText);

      expect(svgAltText).toBeInTheDocument();
    });
  });

  describe("When its rendered", () => {
    test("Then it should show a button with an alt text 'Close button'", () => {
      const expectedAltText = "Close button";

      renderWithProviders(
        <Modal isError={true} message="Error adding synth" />
      );

      const button = screen.getByAltText(expectedAltText);

      expect(button).toBeInTheDocument();
    });
  });
});
