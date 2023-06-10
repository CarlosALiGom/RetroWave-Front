import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import AddSynthPage from "./AddSynthPage";
import userEvent from "@testing-library/user-event";
import {
  Navigate,
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import paths from "../../router/paths/paths";
import App from "../../components/App/App";
import { server } from "../../mocks/server";
import { errorHandlers, handlers } from "../../mocks/handlers";
import SynthsPage from "../SynthsPage/SynthsPage";

describe("Given a AddSynthPage page", () => {
  const labels = [
    "Type:",
    "Model:",
    "Brand:",
    "Release year:",
    "Image:",
    "Description:",
  ];
  const expectedError = "Error adding synth";
  const testText = "test";
  const selectValue = "Analog";
  const buttonText = "Add";
  describe("When its rendered and the user write a synth on the form and push the button", () => {
    test("Then it should show a modal with the message 'Synth added succesfully'", async () => {
      server.resetHandlers(...errorHandlers);

      const routes: RouteObject[] = [
        {
          path: paths.app,
          element: <App />,
          children: [
            {
              index: true,
              element: <Navigate to={paths.addSynth} replace />,
            },
            {
              path: paths.addSynth,
              element: <AddSynthPage />,
            },
          ],
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        users: {
          id: "64707ddf2d09cd1540f0faaf",
          name: "admin",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJzdWIiOiI2NDcwN2RkZjJkMDljZDE1NDBmMGZhYWYiLCJpYXQiOjE2ODU1NDMwMjgsImV4cCI6MTY4NTgwMjIyOH0.8ow7vXeJ31asvveYlL6twB3khIvVPfNmteM5rZR_LjM",
          isLogged: true,
        },
      });

      const labelField1 = screen.getByLabelText(labels[1]);
      const labelField2 = screen.getByLabelText(labels[2]);
      const labelField3 = screen.getByLabelText(labels[3]);
      const labelField4 = screen.getByLabelText(labels[4]);
      const labelField5 = screen.getByLabelText(labels[5]);
      const typeInput = screen.getByLabelText("Type:");
      await userEvent.type(labelField1, testText);
      await userEvent.type(labelField2, testText);
      await userEvent.type(labelField3, testText);
      await userEvent.type(labelField4, testText);
      await userEvent.type(labelField5, testText);
      await userEvent.selectOptions(typeInput, selectValue);

      const button = screen.getByRole("button", { name: buttonText });
      await userEvent.click(button);

      const error = await screen.findByText(expectedError);

      expect(error).toBeInTheDocument();
    });
  });

  describe("asdasdas", () => {
    test("asdasdasd", async () => {
      server.resetHandlers(...handlers);

      const routes = [
        {
          path: "/",
          element: <AddSynthPage />,
        },
        {
          path: paths.synths,
          element: <SynthsPage />,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        users: {
          id: "64707ddf2d09cd1540f0faaf",
          name: "admin",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJzdWIiOiI2NDcwN2RkZjJkMDljZDE1NDBmMGZhYWYiLCJpYXQiOjE2ODU1NDMwMjgsImV4cCI6MTY4NTgwMjIyOH0.8ow7vXeJ31asvveYlL6twB3khIvVPfNmteM5rZR_LjM",
          isLogged: true,
        },
      });

      const labelField1 = screen.getByLabelText(labels[1]);
      const labelField2 = screen.getByLabelText(labels[2]);
      const labelField3 = screen.getByLabelText(labels[3]);
      const labelField4 = screen.getByLabelText(labels[4]);
      const labelField5 = screen.getByLabelText(labels[5]);
      const typeInput = screen.getByLabelText("Type:");
      await userEvent.type(labelField1, testText);
      await userEvent.type(labelField2, testText);
      await userEvent.type(labelField3, testText);
      await userEvent.type(labelField4, testText);
      await userEvent.type(labelField5, testText);
      await userEvent.selectOptions(typeInput, selectValue);

      const button = screen.getByRole("button", { name: buttonText });
      await userEvent.click(button);

      expect(router.state.location.pathname).toBe(paths.synths);
    });
  });
});
