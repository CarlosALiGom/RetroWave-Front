import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Loader from "./Loader";

describe("Given a Loader component", () => {
  describe("When its rendered", () => {
    test("Then it should show an loader with an aria label text 'Loading'", () => {
      const expectedText = "Loading";

      renderWithProviders(<Loader />);

      const loader = screen.getByLabelText(expectedText);

      expect(loader).toBeInTheDocument();
    });
  });
});
