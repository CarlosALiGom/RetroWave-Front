import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { LazySynthsPage } from "../../router/LazyPages";
import SynthsPage from "./SynthsPage";
import { UserDataState } from "../../mocks/userMocks";
import { getSynthsDataMock } from "../../mocks/factories/synthFactory/synthFactory";

describe("Given a SynthPage component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading with the text 'Synths'", async () => {
      const expectedHeading = "Synths";
      const synths = getSynthsDataMock(3);

      renderWithProviders(wrapWithRouter(<LazySynthsPage />), {
        synths: { synths: synths },
        users: UserDataState,
      });

      const heading = await waitFor(() =>
        screen.getByRole("heading", {
          level: 1,
          name: expectedHeading,
        })
      );

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When its rendered with the user alredy logged", () => {
    test("Then it should show a synth with and image alt text", async () => {
      const synths = getSynthsDataMock(3);
      const expectedText = synths[0].name;

      renderWithProviders(wrapWithRouter(<SynthsPage />), {
        synths: { synths: synths },
        users: UserDataState,
      });

      const heading = await screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
