import { screen } from "@testing-library/dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import renderWithProviders from "../../utils/testUtils";
import { vi } from "vitest";

describe("Given a LoginForm component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading with the text 'Login'", () => {
      const expectedHeading = "Login";
      const submitMock = vi.fn();

      renderWithProviders(<LoginForm submitForm={submitMock} />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
