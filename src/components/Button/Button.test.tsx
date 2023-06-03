import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it receives a text 'Login'", () => {
    test("Then it should show a button with 'Login' text", () => {
      const expectedText = "Login";

      renderWithProviders(<Button text="Login" />);

      const button = screen.getByText(expectedText);

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives an icon with and alt text 'delete button'", () => {
    test("Then it should show an icon with and alt text 'delete button'", () => {
      const expectedAltText = "delete button";

      renderWithProviders(
        <Button iconPath="img/deleteSynth.svg" altText="delete button" />
      );

      const button = screen.getByAltText(expectedAltText);

      expect(button).toBeInTheDocument();
    });
  });
});
