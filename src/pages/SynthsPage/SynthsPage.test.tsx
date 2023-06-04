import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { LazySynthsPage } from "../../router/LazyPages";

describe("Given a SynthPage component", () => {
  describe("When its rendered", () => {
    test("Then it should show a heading with the text 'Synths'", async () => {
      const expectedHeading = "Synths";

      renderWithProviders(wrapWithRouter(<LazySynthsPage />));

      const heading = await waitFor(() =>
        screen.getByRole("heading", {
          level: 1,
          name: expectedHeading,
        })
      );

      expect(heading).toBeInTheDocument();
    });
  });
});
