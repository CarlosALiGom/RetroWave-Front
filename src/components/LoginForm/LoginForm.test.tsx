import { screen } from "@testing-library/dom";
import LoginForm from "./LoginForm";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "../../utils/testUtils";

beforeAll(() => {
  vi.clearAllMocks();
});
describe("Given a LoginForm component", () => {
  const submitForm = vi.fn();
  const usernameLabelText = "Username:";
  const passwordLabelText = "Password:";
  const userDataText = "Frank";
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

      await userEvent.type(
        screen.getByLabelText(usernameLabelText),
        userDataText
      );
      await userEvent.type(
        screen.getByLabelText(passwordLabelText),
        userDataText
      );

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

  describe("When the username write 'Frank' on the username input", () => {
    test("Then the input value must be 'Frank", async () => {
      renderWithProviders(<LoginForm submitForm={submitForm} />);

      await userEvent.type(
        screen.getByLabelText(usernameLabelText),
        userDataText
      );

      const usernameInputValue = screen.getByLabelText(usernameLabelText);

      expect(usernameInputValue).toHaveValue(userDataText);
    });
  });

  describe("When the username write 'Frank' on the password input", () => {
    test("Then the input value must be 'Frank'", async () => {
      renderWithProviders(<LoginForm submitForm={submitForm} />);

      await userEvent.type(
        screen.getByLabelText(passwordLabelText),
        userDataText
      );

      const passwordInputValue = screen.getByLabelText(passwordLabelText);

      expect(passwordInputValue).toHaveValue(userDataText);
    });
  });

  describe("When the user writes 'Frank' username and 'Frank' password user credentials and clicks the button", () => {
    test("Then the submit function should be called with the user credentials", async () => {
      const userMock = {
        username: userDataText,
        password: userDataText,
      };

      renderWithProviders(<LoginForm submitForm={submitForm} />);

      await userEvent.type(
        screen.getByLabelText(usernameLabelText),
        userDataText
      );
      await userEvent.type(
        screen.getByLabelText(passwordLabelText),
        userDataText
      );

      const button = screen.getByRole("button");

      await userEvent.click(button);

      expect(submitForm).toHaveBeenCalledWith(userMock);
    });
  });
});
