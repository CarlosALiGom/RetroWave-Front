import { screen } from "@testing-library/react";
import { handlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import {
  addSynthStoreMock,
  eightSynthsDbMock,
} from "../../mocks/synthsDbmocks";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import UpdateSynthPage from "./UpdateSynthPage";

describe("Given a UpdateSynthPage", () => {
  describe("When its rendered and there is a selectedSynth model 'TR-808' in the store", () => {
    test("Then the input value of model should be 'TR-808'", () => {
      server.resetHandlers(...handlers);

      const label = "Model:";
      const expectedLabelText = "TR-808";

      renderWithProviders(wrapWithRouter(<UpdateSynthPage />), {
        users: {
          id: "64707ddf2d09cd1540f0faaf",
          name: "admin",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJzdWIiOiI2NDcwN2RkZjJkMDljZDE1NDBmMGZhYWYiLCJpYXQiOjE2ODU1NDMwMjgsImV4cCI6MTY4NTgwMjIyOH0.8ow7vXeJ31asvveYlL6twB3khIvVPfNmteM5rZR_LjM",
          isLogged: true,
        },
        synths: {
          synths: eightSynthsDbMock,
          selectedSynth: addSynthStoreMock,
        },
      });

      const labelField = screen.getByLabelText(label);

      expect(labelField).toHaveValue(expectedLabelText);
    });
  });
});
