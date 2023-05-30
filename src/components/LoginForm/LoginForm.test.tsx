import { screen } from "@testing-library/dom";
import LoginForm from "./LoginForm";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/testUtils";

describe("Given a LoginForm component", () => {
  const submitForm = vi.fn();
  const usernameLabelText = "Username:";
  const passwordLabelText = "Password:";
  describe("When its rendered", () => {
    test("Then it should show a heading with the text 'Login'", () => {
      const expectedText = "Login";

      renderWithProviders(<LoginForm submitForm={submitForm} />);

      const heading = screen.getByRole("heading", {
        level: 1,
        name: expectedText,
      });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a 'Username:' arial label", () => {
      renderWithProviders(<LoginForm submitForm={submitForm} />);

      const usernameLabel = screen.getByLabelText(usernameLabelText);

      expect(usernameLabel).toBeInTheDocument();
    });

    test("Then it should show a 'Username:' arial label", () => {
      renderWithProviders(<LoginForm submitForm={submitForm} />);

      const passwordLabel = screen.getByLabelText(passwordLabelText);

      expect(passwordLabel).toBeInTheDocument();
    });
  });

  describe("When the username input and the password input are not empty", () => {
    test("Then the button should be enabled", async () => {
      renderWithProviders(<LoginForm submitForm={submitForm} />);

      const button = screen.getByRole("button");

      await userEvent.type(screen.getByLabelText(usernameLabelText), "Frank");
      await userEvent.type(screen.getByLabelText(passwordLabelText), "Frank");

      expect(button).toBeEnabled();
    });
  });

  describe("When the username input and the password input are not empty", () => {
    test("Then the button should be enabled", async () => {
      renderWithProviders(<LoginForm submitForm={submitForm} />);

      const button = screen.getByRole("button");

      expect(button).toBeDisabled();
    });
  });
});
