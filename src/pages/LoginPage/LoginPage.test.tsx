import { screen } from "@testing-library/dom";
import renderWithProviders from "../../utils/testUtils";
import LoginPage from "./LoginPage";

describe("Given a LoginForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading with the text 'Login'", () => {
      const expectedHeading = "Login";

      renderWithProviders(<LoginPage />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
