import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Pagination from "./Pagination";

describe("Given a pagination component", () => {
  describe("When its rendered", () => {
    test("Then it should show a button with the text 'Back'", () => {
      const expectedText = "Back";

      renderWithProviders(<Pagination />);

      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });

  test("Then it should show a button with the text 'Next'", () => {
    const expectedText = "Next";

    renderWithProviders(<Pagination />);

    const button = screen.getByRole("button", { name: expectedText });

    expect(button).toBeInTheDocument();
  });
});
