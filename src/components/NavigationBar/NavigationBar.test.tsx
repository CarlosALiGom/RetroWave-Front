import { screen } from "@testing-library/dom";
import renderWithProviders from "../../utils/testUtils";
import NavigationBar from "./NavigationBar";

describe("Given a NavigationBar component", () => {
  describe("When its rendered", () => {
    test("Then it should show a link with text 'Home'", () => {
      const expectedLinkText = "Home";

      renderWithProviders(<NavigationBar />);

      const linkText = screen.getByRole("link", { name: expectedLinkText });

      expect(linkText).toBeInTheDocument();
    });
  });
});
