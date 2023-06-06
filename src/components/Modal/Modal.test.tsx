import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";
import App from "../App/App";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";

describe("Given a Modal component", () => {
  describe("When its rendered", () => {
    test("Then it should show a svg with and alt text 'synth modal ilustration'", () => {
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
  describe("When its rendered in App and the user clicks the close button", () => {
    test("Then the modal should disapear", async () => {
      const expectedAltText = "Close button";

      const routes: RouteObject[] = [{ path: "/", element: <App /> }];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        ui: { isError: true, message: "Error", isLoading: false },
      });

      const button = screen.getByAltText(expectedAltText);

      await userEvent.click(button);

      expect(button).not.toBeInTheDocument();
    });
  });
});
