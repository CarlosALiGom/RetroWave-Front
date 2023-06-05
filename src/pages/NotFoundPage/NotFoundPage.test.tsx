import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading with the text 'SP-404 Page not found...'", () => {
      const expectedHeading = "SP-404 Page not found...";

      renderWithProviders(<NotFoundPage />);

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
});
